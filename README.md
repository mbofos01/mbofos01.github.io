# Michail Panagiotis Bofos' Personal Website

[![Gem Version](https://img.shields.io/gem/v/jekyll-theme-chirpy)][gem]&nbsp;
[![GitHub license](https://img.shields.io/github/license/cotes2020/chirpy-starter.svg?color=blue)][mit]

This is my personal website built with Jekyll and the [Chirpy theme][chirpy]. It showcases my projects, blog posts, and resume.

## Local Development

To run the site locally for development and testing:

1. **Prerequisites**: Ensure you have Ruby and Bundler installed. On Windows, install Ruby via [RubyInstaller](https://rubyinstaller.org/).

2. **Install Dependencies**:

   ```bash
   bundle install
   ```

3. **Run the Development Server**:

   ```bash
   bundle exec jekyll s -l
   ```

    This starts the Jekyll server with live reload at `http://localhost:4000`.

4. Open your browser and navigate to `http://localhost:4000` to view the site.

## Adding a New Post

To add a new blog post:

1. Create a new Markdown file in the `_posts/` directory with the naming convention: `YYYY-MM-DD-title.md` (e.g., `2026-02-20-new-post.md`).

2. Add the following front matter at the top of the file:

   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD HH:MM:SS +0000
   categories: [Category1, Category2]
   tags: [tag1, tag2]
   author: mbofos01
   ---
   ```

3. Write your post content below the front matter using Markdown.

4. Save the file. The site will automatically rebuild if the server is running with live reload.

## Deployment

This site is hosted on GitHub Pages. Commits to the `main` branch automatically trigger a build and deployment.

## Contributing

This site uses the [Chirpy theme][chirpy]. For theme-related issues or contributions, please visit the [theme repository][chirpy].

## License

This work is published under [MIT][mit] License.

[gem]: https://rubygems.org/gems/jekyll-theme-chirpy
[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy/
[mit]: https://github.com/cotes2020/chirpy-starter/blob/master/LICENSE
