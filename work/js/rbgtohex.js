const rgb = (r, g, b) => ( Math.min(Math.max(r, 0),255).toString(16).length < 2 ? '0' + Math.min(Math.max(r, 0),255).toString(16).toUpperCase() : Math.min(Math.max(r, 0),255).toString(16).toUpperCase() ) + 
                         ( Math.min(Math.max(g, 0),255).toString(16).length < 2 ? '0' + Math.min(Math.max(g, 0),255).toString(16).toUpperCase() : Math.min(Math.max(g, 0),255).toString(16).toUpperCase() ) + 
                         ( Math.min(Math.max(b, 0),255).toString(16).length < 2 ? '0' + Math.min(Math.max(b, 0),255).toString(16).toUpperCase() : Math.min(Math.max(b, 0),255).toString(16).toUpperCase() ) ;

