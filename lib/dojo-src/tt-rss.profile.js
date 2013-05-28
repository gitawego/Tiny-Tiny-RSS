dependencies = {
	// The default selector engine is not included by default in a dojo.js build in order to make mobile builds
    // smaller. We add it back here to avoid that extra HTTP request.
	selectorEngine:'acme',
	// Strips all calls to console functions within the code in production
    stripConsole:'all',
    // Uses Closure Compiler as the JavaScript minifier. This can also be set to "shrinksafe" to use ShrinkSafe,
	// though ShrinkSafe is deprecated and not recommended.
	// This option defaults to "" (no compression) if not provided.
	optimize: 'closure',
	
	// We're building layers, so we need to set the minifier to use for those, too.
	// This defaults to "shrinksafe" if not provided.
	layerOptimize: 'closure',
    internStrings:true,
    // Strips all comments from CSS files.
    cssOptimize:'comments',
    // Providing hints to the build system allows code to be conditionally removed on a more granular level than
    // simple module dependencies can allow. This is especially useful for creating tiny mobile builds.
    // Keep in mind that dead code removal only happens in minifiers that support it! Currently, ShrinkSafe does not
    // support dead code removal; Closure Compiler and UglifyJS do.
    staticHasFeatures:{
        'dojo-log-api':0,
        'dojo-firebug':0
    },
	layers: [
		{
			name: "tt-rss-layer.js",
			dependencies: [
				"dojo._base.url",
				"dojo.cache",
				"dojo.dojo",
				"dojo.parser",
				"dojo.data.ItemFileWriteStore",
				"dojo.Stateful",
				"dojo.string",
				"dojo.text",
				"dojo.touch",
				"dojo.uacss",
				"dojo.window",
				"dojo.parser",
				"dojo.NodeList-fx",
				"dojo.dnd.Moveable",
				"dojo.dnd.move",
				"dojo.dnd.Mover",
				"dojo.dnd.TimedMoveable",
				"dojo.fx.Toggler",
				"dojo.html",
				"dojo.i18n",
				"dojo.date.stamp",
				"dijit.dijit",
				"dijit.ColorPalette",
				"dijit.Dialog",
				"dijit.form.Button",
				"dijit.form.CheckBox",
				"dijit.form.ComboButton",
				"dijit.form.DropDownButton",
				"dijit.form.FilteringSelect",
				"dijit.form.Form",
				"dijit.form.RadioButton",
				"dijit.form.Select",
				"dijit.form.SimpleTextarea",
				"dijit.form.TextBox",
				"dijit.form.ValidationTextBox",
				"dijit.Viewport",
				"dijit.InlineEditBox",
				"dijit.ToolbarSeparator",
				"dijit.PopupMenuItem",
				"dijit.CheckedMenuItem",
				"dijit.layout.AccordionContainer",
				"dijit.layout.AccordionPane",
				"dijit.layout.BorderContainer",
				"dijit.layout.ContentPane",
				"dijit.layout.TabContainer",
				"dijit.Menu",
				"dijit.ProgressBar",
				"dijit.ProgressBar",
				"dijit.Toolbar",
				"dijit.TooltipDialog",
				"dijit.Tree",
				"dijit.tree.dndSource",
			]
		}
	],
	prefixes: [
		[ "dijit", "../dijit" ]
	]
}
