---
layout: post
title: "Debugger Decorator: A Simple Python Debugging Tool"
date: 2026-02-19 13:00:00 +0000
categories: ["Personal Projects"]
tags: [python, debugging, decorators]
author: mbofos01
image: assets/images/decorator/decorator.png
---

As a Python developer, debugging functions can sometimes be tedious, especially when you need to track function calls, arguments, return values, and execution times. To make this process easier, I created **Debugger Decorator**, a lightweight Python decorator that provides detailed debugging information with minimal code changes.

## Why Debugger Decorator?

Debugging in Python often involves adding print statements or using debuggers, which can clutter your code. Debugger Decorator offers a clean, non-intrusive way to get comprehensive debugging information. It's particularly useful for:

- Tracking function execution flow
- Monitoring input parameters and return values
- Measuring execution time
- Identifying performance bottlenecks
- Debugging complex function chains

## Key Features

Debugger Decorator provides several features to enhance your debugging experience:

- **Function Call Information**: Displays the function name and caller info
- **Parameter Logging**: Shows all parameters with their names and values
- **Return Value Display**: Prints the return value of the function
- **Execution Time**: Measures and displays how long the function took to execute
- **Error Handling**: Catches and displays exceptions with detailed information
- **Color Customization**: Supports custom color schemes for better readability
- **Easy to Use**: Simple decorator syntax that works with any function

## Installation

Debugger Decorator is available on PyPI, making installation straightforward:

```bash
pip install debugger-decorator
```

## Basic Usage

Using Debugger Decorator is as simple as adding a decorator to your functions:

```python
from debugger_decorator import show_information

@show_information()
def my_function(a, b):
    return a + b

my_function(1, 2)
```

This will output something like:

```bash
--------------------------------------------------------------------------------
Function 'my_function' was called from line 20 in <module> with:
--------------------------------------------------------------------------------
        --> a: 1
        --> b: 2
--------------------------------------------------------------------------------
Running . . .
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
Returns: 3
--------------------------------------------------------------------------------
Function 'my_function' took 13.9ms to execute.
--------------------------------------------------------------------------------
```

## Customizing Colors

For better accessibility or personal preference, you can customize the color scheme using Colorama:

```python
from debugger_decorator import show_information
from colorama import Fore, Style, Back

# High contrast color scheme
high_contrast_colors = {
    'header': Style.BRIGHT + Fore.WHITE,
    'params': Fore.CYAN,
    'running': Style.BRIGHT + Fore.YELLOW,
    'return': Back.GREEN + Style.BRIGHT + Fore.BLACK,
    'time': Style.BRIGHT + Fore.GREEN,
    'error': Style.BRIGHT + Fore.RED,
    'dashes': Style.BRIGHT + Fore.WHITE,
    'error_dashes': Style.BRIGHT + Fore.RED
}

@show_information(color_scheme=high_contrast_colors)
def my_function(a, b):
    return a + b

my_function(1, 2)
```

Available color keys include:

- `header`: Function name and caller info
- `params`: Parameter names and values
- `running`: "Running..." message
- `return`: Return value display
- `time`: Execution time
- `error`: Error messages
- `dashes`: Separator lines
- `error_dashes`: Error separator lines

## Error Handling

The decorator also handles exceptions gracefully:

```python
@show_information()
def problematic_function(x):
    return 1 / x

problematic_function(0)
```

This will display the error details along with the debugging information.

```bash
--------------------------------------------------------------------------------
Function 'problematic_function' was called from line 28 in <module> with:
--------------------------------------------------------------------------------
        --> x: 0
--------------------------------------------------------------------------------
Running . . .
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
An exception occurred in function 'problematic_function': division by zero
--------------------------------------------------------------------------------


------------------------------------------------------------------------------------------------------------------------
test.py 28 <module>
problematic_function(0)

__init__.py 125 wrapper
output = func(*args)

test.py 26 problematic_function
return 1 / x

ZeroDivisionError:
division by zero
```
