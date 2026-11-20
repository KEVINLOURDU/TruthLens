import os
import sys
from pathlib import Path

# Add project root to sys.path so app and its dependencies can be found
ROOT_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT_DIR))

from app import app, load_cached_system

# Preload models when serverless function container starts
load_cached_system()
