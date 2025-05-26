import sys, json, os
from model_handler import ModelHandler

def main():
    json_file_path = sys.argv[1]
    try:
        with open(json_file_path, 'r') as f:
            print("file!")
    except:
        print("error")

if __name__ == "__main__":
    print("main")