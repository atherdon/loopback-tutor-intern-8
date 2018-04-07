## Client

This is the place for your application front-end files.

don't start from here
just copy the files which react builds in this folder as they both work on separate ports
in package.json of reactapp 

build: react-scripts build && cp -r build/* ../client/

in client src folder npm run build

in middleware.json
files: {
	"loopback#static": {
	"params": "$!../client"
}
}

restart server