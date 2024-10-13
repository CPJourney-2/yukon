export default class TileManager {

	constructor(scene) {
		this.scene = scene

	}

	/* These 8 functions are for getting the 8 surrounding tiles of a single tile,
		 done by inputting numbers for the "x" and "y". Each function returns an object
		 containing the tile game object itself, and the x and y numbers of it.
	*/
	getNorthNeighborOf(tileX, tileY, dark) {
		let t = this.scene[`${dark ? 'dt' : 't'}${parseInt(tileY) - 1}${tileX}`]
		if(!t) return false
		return({
			tile: t,
			x: tileX,
			y: parseInt(tileY) - 1,
			dark: dark,
			visible: !t ? false : t.visible
		})
	}

	getNorthEastNeighborOf(tileX, tileY, dark) {
		let _x = tileX?.toString().startsWith('0') ? parseInt(tileX.slice(1)) : parseInt(tileX)
		let nextIncrement = (_x + 1 > 9) ? (_x + 1) : `0${_x + 1}`
		let t = this.scene[`${dark ? 'dt' : 't'}${parseInt(tileY) - 1}${nextIncrement}`]
		if(!t) return false
		return({
			tile: t,
			x: nextIncrement,
			y: parseInt(tileY) - 1,
			dark: dark,
			visible: !t ? false : t.visible
		})
	}

	getEastNeighborOf(tileX, tileY, dark) {
		let _x = tileX?.toString().startsWith('0') ? parseInt(tileX.slice(1)) : parseInt(tileX)
		let nextIncrement = (_x + 1 > 9) ? (_x + 1) : `0${_x + 1}`
		let t = this.scene[`${dark ? 'dt' : 't'}${tileY}${nextIncrement}`]
		if(!t) return false
		return({
			tile: t,
			x: nextIncrement,
			y: tileY,
			dark: dark,
			visible: !t ? false : t.visible
		})
	}

	getSouthEastNeighborOf(tileX, tileY, dark) {
		let _x = tileX?.toString().startsWith('0') ? parseInt(tileX.slice(1)) : parseInt(tileX)
		let nextIncrement = (_x + 1 > 9) ? (_x + 1) : `0${_x + 1}`
		let t = this.scene[`${dark ? 'dt' : 't'}${parseInt(tileY) + 1}${nextIncrement}`]
		if(!t) return false
		return({
			tile: t,
			x: nextIncrement,
			y: parseInt(tileY) + 1,
			dark: dark,
			visible: !t ? false : t.visible
		})
	}

	getSouthNeighborOf(tileX, tileY, dark) {
		let t = this.scene[`${dark ? 'dt' : 't'}${parseInt(tileY) + 1}${tileX}`]
		if(!t) return false
		return({
			tile: t,
			x: tileX,
			y: parseInt(tileY) + 1,
			dark: dark,
			visible: !t ? false : t.visible
		})
	}

	getSouthWestNeighborOf(tileX, tileY, dark) {
		let _x = tileX?.toString().startsWith('0') ? parseInt(tileX.slice(1)) : parseInt(tileX)
		let nextIncrement = (_x - 1 > 9) ? (_x - 1) : `0${_x - 1}`
		let t = this.scene[`${dark ? 'dt' : 't'}${parseInt(tileY) + 1}${nextIncrement}`]
		if(!t) return false
		return({
			tile: t,
			x: nextIncrement,
			y: parseInt(tileY) + 1,
			dark: dark,
			visible: !t ? false : t.visible
		})
	}

	getWestNeighborOf(tileX, tileY, dark) {
		let _x = tileX?.toString().startsWith('0') ? parseInt(tileX.slice(1)) : parseInt(tileX)
		let nextIncrement = (_x - 1 > 9) ? (_x - 1) : `0${_x - 1}`
		let t = this.scene[`${dark ? 'dt' : 't'}${tileY}${nextIncrement}`]
		if(!t) return false
		return({
			tile: t,
			x: nextIncrement,
			y: tileY,
			dark: dark,
			visible: !t ? false : t.visible
		})
	}

	getNorthWestNeighborOf(tileX, tileY, dark) {
		let _x = tileX?.toString().startsWith('0') ? parseInt(tileX.slice(1)) : parseInt(tileX)
		let nextIncrement = (_x - 1 > 9) ? (_x - 1) : `0${_x - 1}`
		let t = this.scene[`${dark ? 'dt' : 't'}${parseInt(tileY) - 1}${nextIncrement}`]
		if(!t) return false
		return({
			tile: t,
			x: nextIncrement,
			y: parseInt(tileY) - 1,
			dark: dark,
			visible: !t ? false : t.visible
		})
	}

	// Primary function for mass setting the surrounding tile frames of one tile
	changeNeighborsOf(tileX, tileY, dark = false) {
		let north = this.getNorthNeighborOf(tileX, tileY, dark)
		let northEast = this.getNorthEastNeighborOf(tileX, tileY, dark)
		let east = this.getEastNeighborOf(tileX, tileY, dark)
		let southEast = this.getSouthEastNeighborOf(tileX, tileY, dark)
		let south = this.getSouthNeighborOf(tileX, tileY, dark)
		let southWest = this.getSouthWestNeighborOf(tileX, tileY, dark)
		let west = this.getWestNeighborOf(tileX, tileY, dark)
		let northWest = this.getNorthWestNeighborOf(tileX, tileY, dark)

		this.changeTile(north.tile, north.x, north.y, dark)
		this.changeTile(northEast.tile, northEast.x, northEast.y, dark)
		this.changeTile(east.tile, east.x, east.y, dark)
		this.changeTile(southEast.tile, southEast.x, southEast.y, dark)
		this.changeTile(south.tile, south.x, south.y, dark)
		this.changeTile(southWest.tile, southWest.x, southWest.y, dark)
		this.changeTile(west.tile, west.x, west.y, dark)
		this.changeTile(northWest.tile, northWest.x, northWest.y, dark)
	}

	// Changes an INDIVIDUAL tile
	changeTile(tile,tileX,tileY,dark) {
		if(!tile || !tile.visible) return
		let north = this.getNorthNeighborOf(tileX, tileY, dark)
		let northEast = this.getNorthEastNeighborOf(tileX, tileY, dark)
		let east = this.getEastNeighborOf(tileX, tileY, dark)
		let southEast = this.getSouthEastNeighborOf(tileX, tileY, dark)
		let south = this.getSouthNeighborOf(tileX, tileY, dark)
		let southWest = this.getSouthWestNeighborOf(tileX, tileY, dark)
		let west = this.getWestNeighborOf(tileX, tileY, dark)
		let northWest = this.getNorthWestNeighborOf(tileX, tileY, dark)

		if(north.visible && northEast.visible && east.visible && southEast.visible && south.visible && southWest.visible && west.visible && northWest.visible) tile.setFrame('tiles/tile0001')
		else if((!north.visible || (!north.visible && !northEast.visible) || (!north.visible && !northWest.visible)) && east.visible && southEast.visible && south.visible && southWest.visible && west.visible) tile.setFrame('tiles/tile0002')
		else if(north.visible && (!east.visible || (!east.visible && !northEast.visible) || (!east.visible && !southEast.visible)) && south.visible && southWest.visible && west.visible && northWest.visible) tile.setFrame('tiles/tile0003')
		else if(north.visible && northEast.visible && east.visible && (!south.visible || (!south.visible && !southWest.visible) || (!south.visible && !southEast.visible)) && west.visible && northWest.visible) tile.setFrame('tiles/tile0004')
		else if(north.visible && northEast.visible && east.visible && southEast.visible && south.visible && (!west.visible || (!west.visible && !southWest.visible) || (!west.visible && !northWest.visible))) tile.setFrame('tiles/tile0005')
		else if((!north.visible || (!north.visible && !northEast.visible) || (!north.visible && !northWest.visible)) && east.visible && southEast.visible && south.visible && (!west.visible || (!west.visible && !southWest.visible) || (!west.visible && !northWest.visible))) tile.setFrame('tiles/tile0006')
		else if((!north.visible || (!north.visible && !northEast.visible) || (!north.visible && !northWest.visible)) && (!east.visible || (!east.visible && !northEast.visible) || (!east.visible && !southEast.visible)) && south.visible && southWest.visible && west.visible) tile.setFrame('tiles/tile0007')
		else if(north.visible && (!east.visible || (!east.visible && !northEast.visible) || (!east.visible && !southEast.visible)) && (!south.visible || (!south.visible && !southWest.visible) || (!south.visible && !southEast.visible)) && west.visible && northWest.visible) tile.setFrame('tiles/tile0008')
		else if(north.visible && northEast.visible && east.visible && (!south.visible || (!south.visible && !southWest.visible) || (!south.visible && !southEast.visible)) && (!west.visible || (!west.visible && !southWest.visible) || (!west.visible && !northWest.visible))) tile.setFrame('tiles/tile0009')
		else if((!north.visible || (!north.visible && !northEast.visible) || (!north.visible && !northWest.visible)) && east.visible && (!south.visible || (!south.visible && !southWest.visible) || (!south.visible && !southEast.visible)) && west.visible) tile.setFrame('tiles/tile0010')
		else if(north.visible && (!east.visible || (!east.visible && !northEast.visible) || (!east.visible && !southEast.visible)) && south.visible && (!west.visible || (!west.visible && !southWest.visible) || (!west.visible && !northWest.visible))) tile.setFrame('tiles/tile0011')
		else if(!north.visible && northEast.visible && east.visible && !southEast.visible && south.visible && southWest.visible && !west.visible && !northWest.visible) tile.setFrame('tiles/tile0012')
		else if(!north.visible && !northEast.visible && !east.visible && southEast.visible && south.visible && !southWest.visible && west.visible && northWest.visible) tile.setFrame('tiles/tile0013')
		else if(north.visible && northEast.visible && !east.visible && !southEast.visible && !south.visible && southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0014')
		else if(north.visible && !northEast.visible && east.visible && southEast.visible && !south.visible && !southWest.visible && !west.visible && northWest.visible) tile.setFrame('tiles/tile0015')
		else if(!north.visible && !northEast.visible && !east.visible && (south.visible || (south.visible && southWest.visible) || (south.visible && southEast.visible)) && !west.visible && !northWest.visible) tile.setFrame('tiles/tile0016')
		else if(!north.visible && !northEast.visible && !east.visible && !southEast.visible && !south.visible && (west.visible || (west.visible && southWest.visible) || (west.visible && northWest.visible))) tile.setFrame('tiles/tile0017')
		else if((north.visible || (north.visible && northEast.visible) || (north.visible && northWest.visible))&& !east.visible && !southEast.visible && !south.visible && !southWest.visible && !west.visible) tile.setFrame('tiles/tile0018')
		else if(!north.visible && (east.visible || (east.visible && northEast.visible) || (east.visible && southEast.visible)) && !south.visible && !southWest.visible && !west.visible && !northWest.visible) tile.setFrame('tiles/tile0019')
		else if(north.visible && !northEast.visible && east.visible && !southEast.visible && south.visible && !southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0020')
		else if(north.visible && !northEast.visible && east.visible && !southEast.visible && south.visible && !southWest.visible && west.visible && northWest.visible) tile.setFrame('tiles/tile0021')
		else if(north.visible && northEast.visible && east.visible && !southEast.visible && south.visible && !southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0022')
		else if(north.visible && !northEast.visible && east.visible && southEast.visible && south.visible && !southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0023')
		else if(north.visible && !northEast.visible && east.visible && !southEast.visible && south.visible && southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0024')
		else if(north.visible && !northEast.visible && east.visible && southEast.visible && south.visible && southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0025')
		else if(north.visible && !northEast.visible && east.visible && !southEast.visible && south.visible && southWest.visible && west.visible && northWest.visible) tile.setFrame('tiles/tile0026')
		else if(north.visible && northEast.visible && east.visible && !southEast.visible && south.visible && !southWest.visible && west.visible && northWest.visible) tile.setFrame('tiles/tile0027')
		else if(north.visible && northEast.visible && east.visible && southEast.visible && south.visible && !southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0028')
		else if(north.visible && northEast.visible && east.visible && southEast.visible && south.visible && southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0029')
		else if(north.visible && !northEast.visible && east.visible && southEast.visible && south.visible && southWest.visible && west.visible && northWest.visible) tile.setFrame('tiles/tile0030')
		else if(north.visible && northEast.visible && east.visible && !southEast.visible && south.visible && southWest.visible && west.visible && northWest.visible) tile.setFrame('tiles/tile0031')
		else if(north.visible && northEast.visible && east.visible && southEast.visible && south.visible && !southWest.visible && west.visible && northWest.visible) tile.setFrame('tiles/tile0032')
		else if(!north.visible && !northEast.visible && east.visible && !southEast.visible && south.visible && southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0033')
		else if(!north.visible && !northEast.visible && east.visible && southEast.visible && south.visible && !southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0034')
		else if(north.visible && !northEast.visible && !east.visible && !southEast.visible && south.visible && southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0035')
		else if(north.visible && !northEast.visible && !east.visible && !southEast.visible && south.visible && !southWest.visible && west.visible && northWest.visible) tile.setFrame('tiles/tile0036')
		else if(north.visible && northEast.visible && east.visible && !southEast.visible && !south.visible && !southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0037')
		else if(north.visible && !northEast.visible && east.visible && !southEast.visible && !south.visible && !southWest.visible && west.visible && northWest.visible) tile.setFrame('tiles/tile0038')
		else if(north.visible && !northEast.visible && east.visible && southEast.visible && south.visible && !southWest.visible && !west.visible && !northWest.visible) tile.setFrame('tiles/tile0039')
		else if(north.visible && northEast.visible && east.visible && !southEast.visible && south.visible && !southWest.visible && !west.visible && !northWest.visible) tile.setFrame('tiles/tile0040')
		else if(!north.visible && !northEast.visible && east.visible && !southEast.visible && south.visible && !southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0041')
		else if(north.visible && !northEast.visible && !east.visible && !southEast.visible && south.visible && !southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0042')
		else if(north.visible && !northEast.visible && east.visible && !southEast.visible && !south.visible && !southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0043')
		else if(north.visible && !northEast.visible && east.visible && !southEast.visible && south.visible && !southWest.visible && !west.visible && !northWest.visible) tile.setFrame('tiles/tile0044')
		else if(!north.visible && !northEast.visible && !east.visible && !southEast.visible && !south.visible && !southWest.visible && !west.visible && !northWest.visible) tile.setFrame('tiles/tile0045')
		else if(north.visible && northEast.visible && east.visible && !southEast.visible && south.visible && southWest.visible && west.visible && !northWest.visible) tile.setFrame('tiles/tile0046')
		else if(north.visible && !northEast.visible && east.visible && southEast.visible && south.visible && !southWest.visible && west.visible && northWest.visible) tile.setFrame('tiles/tile0047')
	}
}
