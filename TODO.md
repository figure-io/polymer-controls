TODO
====


### General

1. ~~Shorten method name `computeDefaultStep` to, e.g., `getStep`.~~
2. ~~In the config, rather than infer what a control should be, a user should just say what s/he wants; e.g.,
	```
	[
		...,
		{
			'type': 'slider',
			'min': 0,
			'max': 1
		},
		...
	]
	```~~
3. ~~Rather than a control having a `name`, a control should be assigned an `id`. This `id` should still be externally assigned. Basically, change the property from `name` to `id`.~~
4. each control should have its own defined schema describing the required and optional properties
	-	anytime a configuration is provided for a particular control, the configuration should be validated against the schema
	-	for an example schema, see the schema and associated validator for `matrix-diagram`
5. ~~for adding controls, maybe make the `add` method polymorphic, allowing both a single object or an object array.~~
6. ~~I am not sure `width` and `height` attributes are needed.~~
	- 	~~for figures, these are provided, as SVG elements must have their dimensions explicitly set using pixels~~
7. we need to improve the demo
8. slider clbk should be bracketed / rate-limited
9.


### Notes

1. In client applications, I consider it better practice to emit errors which can be trapped and dealt with in application code, rather than throw errors. In a client-side app, better to keep going and silently fail, rather than throw errors into a console.
2.


### Styles

1. Add reset styles
2. Add media query styles
3. move away from material components where possible
	-	do take inspiration from how material does theming
4. should elements be placed on a grid?
	-	this would allow alignment, rather than just a list
5.
