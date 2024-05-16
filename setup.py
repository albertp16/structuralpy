from setuptools import setup, find_packages
# export TWINE_USERNAME


setup(
    name = "apectool",
    version = "0.2",
    packages = find_packages(),
    install_requires = [
        #Add dependecies 
    ],
    entry_points = {
        "console_stripts" : [
            "aptool = aptool:tools",
        ]
    }
)

# dce8f525-74ce-43af-bae6-5934b1aa5e73dce8f525-74ce-43af-bae6-5934b1aa5e73C:\Users\alber\OneDrive\OLD FILES NOV 2022\Desktop\skyCiv\structuralpy\setup.py