import pathlib

import setuptools

setuptools.setup(
    name="strucpy",
    version="0.0.1",
    description="A python structure aid analysis tool",
    long_description=pathlib.Path("README.md").read_text(),
    long_description_content_type="text/markdown",
    url="", # Add the URL
    author="Pot",
    license="MIT",
    # project_urls={
    #     # ""
    # }
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent"
    ],
    python_requires=">=3.6",
    install_requires=["requests","pandas>=2.0"],
    packages=setuptools.find_packages(),
    include_package_data=True,
    entry_points={"console_scripts":["strucpy=strucpy.__main__:main"]},
)