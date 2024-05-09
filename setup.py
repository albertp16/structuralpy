from setuptools import setup, find_packages
# export TWINE_USERNAME


setup(
    name = "aptool",
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