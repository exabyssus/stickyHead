# Sticky Head jQuery plugin
Header scrolls away normally on scroll down (unless stick offset is set).

On scroll up header comes back right away.

## Demo

[https://exabyssus.github.io/stickyHead/](https://exabyssus.github.io/stickyHead/)

## Requirements

- jQuery: [http://jquery.com/](http://jquery.com/)

## Usage

Add jQuery and stickyHead to your page.
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<script type="text/javascript" src="/assets/js/jQuery.stickyHead.js"></script>`
```

Then call the plugin.
```javascript
$(function() {

    var option = {}; // Add your options here (optional)

		$('#header').stickyHead(options);

	});
```

## Options
```
  topStickOffset : 100, // How far header will stick to the top before scrolling away. (default: 100) (px),
  addPadding : true // If true, will add padding-top to body. (default: true)
```
## Development

Pull requests are welcome!

####Road map

- [ ] Remove jQuery dependency
- [ ] Optimize for smooth draw, even on slow computers
- [ ] Use "position:fixed" on upwards scroll
- [ ] Use hardware acceleration
- [ ] ???


## License

This library is being provided as is under an MIT license. See LICENSE for the details of that.
