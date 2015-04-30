# Default to development if environment is not set.
saved = environment
if (environment.nil?)
  environment = :development
else
  environment = saved
end

# Location of the theme's resources.
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
generated_images_dir = images_dir + "/generated"
fonts_dir = "fonts"

# Require any additional compass plugins installed on your system.
require 'compass-normalize'
require 'sass-globbing'
require 'breakpoint'
require 'singularitygs'

# You can select your preferred output style here (:expanded, :nested, :compact
# or :compressed).
output_style = (environment == :production) ? :compressed : :nested

# To enable relative paths to assets via compass helper functions. Since Drupal
# themes can be installed in multiple locations, we don't need to worry about
# the absolute path to the theme from the server omega.
relative_assets = true

# Conditionally enable line comments when in development mode.
line_comments = (environment == :production) ? false : true

# Output debugging info in development mode.
sass_options = (environment == :production) ? {} : {sourcemap: true}

# Add the 'sass' directory itself as an import path to ease imports.
add_import_path 'sass'
