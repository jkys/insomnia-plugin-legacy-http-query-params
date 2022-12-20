# insomnia-plugin-legacy-http-query-params
Modifies query parameters to use semicolons instead of ampersand to pass parameters in the URL.


## Usage
Simply install the plugin, and whatever values you put in the query tab will be translated into the request URL with semicolons (;) instead of ampersands (&).

![Screenshot of the REST API with query parameters and timeline box](https://github.com/jkys/insomnia-plugin-legacy-http-query-params/blob/main/assets/timeline-screenshot.png)

## Limitations & Notices
This will not take into account any query parameters manually entered into the URL request box, only those within the Query tab. Also if there is other items added it to the URL with a `?`, it will add another :(