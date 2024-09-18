import os
import subprocess

# Root directory containing the JavaScript files and subdirectories
root_dir = '/home/selab/Desktop/javascript-malware-collection/2024'

# Path to the tool's directory where "build/index.js" is located
tool_dir = '/home/selab/Desktop/wobfuscator_tool/Wobfuscator'

# Configuration file path required by the tool
config_path = '/home/selab/Desktop/wobfuscator_tool/Wobfuscator/build/config.json'

# Function to execute the tool command
def run_tool(input_file, output_file, config_file):
    # Construct the command
    command = [
        'node',
        os.path.join(tool_dir, 'build/index.js'),
        '-f', input_file,          # Input JS file
        '-o', output_file,         # Output JS file
        '-c', config_file          # Config file
    ]

    # Run the command using subprocess
    try:
        result = subprocess.run(command, check=True, capture_output=True, text=True)
        print(f"Processed {input_file} successfully.")
        print(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Error processing {input_file}: {e}")
        print(e.stderr)

# Traverse the directory structure and find JavaScript files
for folder_name, subfolders, files in os.walk(root_dir):
    for file in files:
        if file.endswith('.js'):  # Process only JavaScript files
            js_file_path = os.path.join(folder_name, file)

            # Create the output file path in the same folder with a new name (e.g., output_file.js)
            output_file_name = f"output_{file}"  # Prefix 'output_' to the JS file name
            output_file_path = os.path.join(folder_name, output_file_name)

            # Run the tool for the current JS file
            run_tool(js_file_path, output_file_path, config_path)

