import os

# Root directory containing the JavaScript files and subdirectories
root_dir = '/home/selab/Desktop/javascript-malware-collection/2024'

# Function to create HTML content for each JavaScript file
def create_html_content(js_file_name, js_code):
    # Basic HTML structure
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{js_file_name}</title>
    </head>
    <body>
        <h1>JavaScript File: {js_file_name}</h1>
        <pre><code>{js_code}</code></pre>
    </body>
    </html>
    """
    return html_content

# Traverse through the folder structure
for folder_name, subfolders, files in os.walk(root_dir):
    for file in files:
        # Check if the file is a JavaScript file that starts with 'output_'
        if file.startswith('output_') and file.endswith('.js'):
            js_file_path = os.path.join(folder_name, file)
            
            # Read the JavaScript file content
            with open(js_file_path, 'r', encoding='utf-8') as js_file:
                js_code = js_file.read()

            # Create the HTML content
            html_content = create_html_content(file, js_code)

            # Create HTML file path with the same name as the JS file but with .html extension
            html_file_path = os.path.join(folder_name, f"{os.path.splitext(file)[0]}.html")

            # Write the HTML content to the new HTML file
            with open(html_file_path, 'w', encoding='utf-8') as html_file:
                html_file.write(html_content)

            print(f"Created HTML file for: {file}")
