tipso
=====

A Lightweight Responsive jQuery Tooltip Plugin (Forked from https://github.com/object505/tipso)

## Getting started

1. Include jQuery

	```html
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	```

	>Requires jQuery 1.7+

2. Include plugin's code

	```html
	<link rel="stylesheet" href="/path/to/tipso.css">
	<script src="/path/to/tipso.js"></script>
	```
To use css3 animation effects please include [Animate.css](http://daneden.github.io/animate.css)

	```html
	<link rel="stylesheet" href="/path/to/animate.css">	
	```

3. Call the plugin

	```javascript
	$('.tipso').tipso();
	```

##Usage

| Name           | Default      | Description                                                                                                                        |
|----------------|--------------|------------------------------------------------------------------------------------------------------------------------------------|
| speed          | 400          | integer - Duration of the fade effect in ms                                                                                        |
| background     | '#55b555'    | Background color of the tooltip, it can be hex, rgb, rgba, color name                                                              |
| color          | '#ffffff'    | Text color of the tooltip, it can be hex, rgb, rgba, color name                                                                    |
| position       | 'top'        | Initial position of the tooltip, available positions 'top', 'bottom', 'left', 'right'                                              |
| width          | 200          | Width of the tooltip in px or % (for % add the value in quotes ex.'50%')                                                           |
| maxWidth       | ''           | max-width of the tooltip in px or % (for % add the value in quotes ex.'50%'). For usage you need to set width to '', false or null |
| delay          | 200          | Delay before showing the tooltip in ms                                                                                             |
| animationIn    | ''           | CSS3 animation effect to show the tooltip using [Animate.css](http://daneden.github.io/animate.css)                                |
| animationOut   | ''           | CSS3 animation effect to hide the tooltip using [Animate.css](http://daneden.github.io/animate.css)                                |
| offsetX        | 0            | Offset value of the tooltip on X axis                                                                                              |
| offsetY        | 0            | Offset value of the tooltip on Y axis                                                                                              |
| tooltipHover   | false        | Abillity to interact with the tooltip content                                                                                      |
| content        | null         | The content of the tooltip, can be text, html or whatever you want                                                                 |
| ajaxContentUrl | null         | Url for Ajax content                                                                                                               |
| useTitle       | true         | To use the default title attribute as content (true,false)                                                                         |
| onBeforeShow   | function(){} | Function to be executed before tipso is shown                                                                                      |
| onShow         | function(){} | Function to be executed after tipso is shown                                                                                       |
| onHide         | function(){} | Function to be executed after tipso is hidden                                                                                      |

> Additionaly you can use `data-tipso` instead of the title attribute for the tooltip content ( set `useTitle: false` )

## API

```javascript
	// Show the tipso tooltip
	$('.tipso').tipso('show');

	// Hide the tipso tooltip
	$('.tipso').tipso('hide');

	// Destroy tipso tooltip
	$('.tipso').tipso('destroy');
	
	// Add a callback before tipso is shown
	$('.tipso').tipso({
		onBeforeShow: function(){
			// Your code
		}
	});

	// Add a callback when tipso is shown
	$('.tipso').tipso({
		onShow: function(){
			// Your code
		}
	});

	// Add a callback when tipso is hidden
	$('.tipso').tipso({
		onHide: function(){
			// Your code
		}
	});

	// Load AJAX content to tipso
	$('.tipso').tipso({	
		useTitle: false,
		ajaxContentUrl : 'ajax.html'
	});

	// Update tipso options
	$('.tipso').tipso('update', 'content', 'new content');
```

## Demo
Here is the link to the [demo][demo]
[demo]: http://tipso.object505.com

## Bugs
For bug reports, questions, feature requests, or other suggestions please create an [issue][issue] on GitHub.
[issue]: https://github.com/object505/tipso/issues/new


## Author
| ![twitter/BojanPetkovski](http://gravatar.com/avatar/30befed2bed6e1690a6b47cf617f7927?s=105](http://twitter.com/BojanPetkovski "Follow @BojanPetkovski on Twitter") |
|---|
| [Bojan Petkovski](http://object505.com) |

## License
tipso is licensed under the [MIT License](http://object505.mit-license.org/)
