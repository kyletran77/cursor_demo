#!/usr/bin/env python3

import os
import sys
import json
import requests
import logging
from datetime import datetime
import time

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('demo/logging/application.log'),
        logging.StreamHandler(sys.stdout)
    ]
)

logger = logging.getLogger(__name__)

class DataProcessor:
    def __init__(self):
        self.config = None
        self.api_key = None
        self.database_url = None
        
    def load_config(self):
        """Load configuration from file - this will fail"""
        try:
            logger.info("Loading configuration file...")
            # This file doesn't exist - will cause FileNotFoundError
            with open('config/app_config.json', 'r') as f:
                self.config = json.load(f)
            logger.info("Configuration loaded successfully")
        except FileNotFoundError as e:
            logger.error(f"Configuration file not found: {e}")
            raise
        except json.JSONDecodeError as e:
            logger.error(f"Invalid JSON in configuration file: {e}")
            raise
            
    def fetch_api_data(self):
        """Fetch data from API - this will fail with various errors"""
        try:
            logger.info("Fetching data from API...")
            # Using invalid API endpoint
            response = requests.get(
                "https://api.nonexistent-service.com/v1/data",
                headers={"Authorization": f"Bearer {self.api_key}"},
                timeout=5
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.ConnectionError as e:
            logger.error(f"Failed to connect to API: {e}")
            raise
        except requests.exceptions.Timeout as e:
            logger.error(f"API request timed out: {e}")
            raise
        except requests.exceptions.HTTPError as e:
            logger.error(f"HTTP error occurred: {e}")
            raise
            
    def process_data(self, data):
        """Process data - this will fail with type errors"""
        try:
            logger.info("Processing data...")
            results = []
            
            # This will fail because data is None
            for item in data['items']:
                # This will cause KeyError
                processed_item = {
                    'id': item['id'],
                    'name': item['name'],
                    'value': item['nonexistent_key'],  # KeyError
                    'calculated': item['price'] * item['quantity']  # May cause TypeError
                }
                results.append(processed_item)
                
            logger.info(f"Processed {len(results)} items successfully")
            return results
            
        except TypeError as e:
            logger.error(f"Type error during data processing: {e}")
            raise
        except KeyError as e:
            logger.error(f"Missing required key in data: {e}")
            raise
            
    def save_to_database(self, data):
        """Save data to database - this will fail"""
        try:
            logger.info("Saving data to database...")
            # Simulate database connection error
            if not self.database_url:
                raise ConnectionError("Database URL not configured")
                
            # Simulate SQL injection vulnerability (bad practice)
            query = f"INSERT INTO users VALUES ('{data['name']}', '{data['email']}')"
            logger.debug(f"Executing query: {query}")
            
            # Simulate database constraint violation
            raise ValueError("Duplicate key violation: user already exists")
            
        except ConnectionError as e:
            logger.error(f"Database connection failed: {e}")
            raise
        except ValueError as e:
            logger.error(f"Database constraint violation: {e}")
            raise
            
    def cleanup_temp_files(self):
        """Cleanup temporary files - this will partially fail"""
        try:
            logger.info("Cleaning up temporary files...")
            temp_files = [
                '/tmp/nonexistent_file.tmp',
                '/tmp/another_missing_file.tmp',
                '/tmp/permission_denied.tmp'
            ]
            
            for file_path in temp_files:
                try:
                    os.remove(file_path)
                    logger.debug(f"Removed {file_path}")
                except FileNotFoundError:
                    logger.warning(f"Temp file not found: {file_path}")
                except PermissionError:
                    logger.error(f"Permission denied removing: {file_path}")
                    
        except Exception as e:
            logger.error(f"Unexpected error during cleanup: {e}")

def main():
    """Main function that orchestrates the buggy operations"""
    logger.info("=== Starting Buggy Application Demo ===")
    
    processor = DataProcessor()
    
    try:
        # This will fail - config file doesn't exist
        processor.load_config()
        
        # This will fail - API doesn't exist
        api_data = processor.fetch_api_data()
        
        # This will fail - data processing errors
        processed_data = processor.process_data(api_data)
        
        # This will fail - database errors
        processor.save_to_database(processed_data[0])
        
    except Exception as e:
        logger.critical(f"Application crashed with error: {e}")
        logger.exception("Full traceback:")
        
    finally:
        # This will generate warnings
        processor.cleanup_temp_files()
        logger.info("=== Application Demo Completed ===")

if __name__ == "__main__":
    main() 