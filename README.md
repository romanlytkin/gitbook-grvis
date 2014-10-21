**GitBook GrViz Plugin**
==============

This is a sample plugin for GitBook. Gitbook GrViz plugin is used to select from markdown dot and converting it into a picture format svg.

**Example:**

*Text format dot:*

digraph g {

	overlap=false;
	rankdir = BT;
	node [shape=record];
	subgraph Atlantis {
		Tour;
		Order;
		CollectionPoint;
		TakePointTourist;
		TransportOwner;
		BusItem;
		ReturnPointTourist;

		Tour -> Order[label="" len=4.00];
		Order -> Tour[label="" len=4.00];
		CollectionPoint -> TakePointTourist[label="" len=4.00];
		TransportOwner -> BusItem[label="" len=4.00];
		CollectionPoint -> ReturnPointTourist[label="" len=4.00];
	}
}

![](./images/dot.png)

***Image dot.***

**How to use it:**
--------------

Gitbook GrViz plugin can be installed from NPM using:

```$ npm install gitbook-GrViz```

***Additional requirements:***

 - Create a directory */assets/images/dot* in the root of your project.
 - [Install Graphviz.](http://www.graphviz.org/Download..php)
