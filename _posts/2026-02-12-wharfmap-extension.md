---
layout: post
title: "Introducing Wharfmap: A Docker Compose Visualization Extension for VS Code"
date: 2026-02-12 15:00:00 +0000
categories: ["Personal Projects", Wharfmap]
tags: [vscode, extension, docker, compose, visualization]
author: mbofos01
image: assets/wharfmap_screenshot.png
---

As a developer working with complex Docker Compose setups, I often found myself struggling to visualize the relationships between services, dependencies, and networks in my projects. This personal frustration led me to create **Wharfmap**, a VS Code extension designed to make Docker Compose files more understandable and manageable.

## Why Wharfmap?

Docker Compose files can become quite convoluted, especially in larger projects with multiple services, dependencies, and networks. Wharfmap addresses this by providing a clear visual representation of your compose setup. A special shoutout goes to a Reddit user who suggested including service versions in the visualization – that feature has been incredibly helpful!

## Key Features

Wharfmap offers several powerful features to enhance your Docker Compose workflow:

- **Service Visualization**: See all your services at a glance, including their dependencies (like `depends_on` relationships)
- **Network Mapping**: Visualize how services are connected through networks
- **Mermaid Integration**: Uses Mermaid markdown for clean, professional diagrams
- **Export Options**: Export your visualization as an SVG image or raw Mermaid markdown
- **Customizable Styling**: Personalize the appearance of your diagrams to match your preferences
- **Version Display**: Easily see which version of each service is being used

## Installation

Installing Wharfmap is straightforward. You can find it in the VS Code marketplace:

1. Open VS Code
2. Go to the Extensions view (Ctrl+Shift+X)
3. Search for "Wharfmap"
4. Click Install

Alternatively, you can install it directly from the command line:

```bash
code --install-extension mbofos01.wharfmap-extension
```

## How to Use

Once installed, using Wharfmap is straightforward:

1. Open a `docker-compose.yml` or similar YAML file in VS Code
2. Click the "Visualize with Wharfmap" button that appears at the top of the editor
3. Alternatively, right-click in the YAML file and select "Visualize with Wharfmap"
4. The visualization will display your services, dependencies, and networks using Mermaid diagrams
5. Use the side panel to customize settings like default colors and whether to show service versions
6. Export your diagram as an SVG image or raw Mermaid markdown when ready

<!-- Add screenshots here -->

![Wharfmap Extension Screenshot](assets/docker-compose.svg)
*Figure 1: Visualization of a Docker Compose file using Wharfmap*

## Conclusion

Wharfmap has significantly improved my workflow when dealing with Docker Compose files. I hope it helps other developers navigate complex container setups with ease. If you find it useful, please consider leaving a review on the VS Code marketplace!

For more information, check out the [VS Code Marketplace page](https://marketplace.visualstudio.com/items?itemName=mbofos01.wharfmap-extension).
