AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;   
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "Comic1",
        title: "Comic1",
        url: "./assets/thumbnails/Comic1.jpg",
      },
      {
        id: "Comic2",
        title: "Comic2",
        url: "./assets/thumbnails/Comic2.jpg",
      },

      {
        id: "Comic3",
        title: "Comic3",
        url: "./assets/thumbnails/Comic3.jpg",
      },
      {
        id: "Comic4",
        title: "Comic4",
        url: "./assets/thumbnails/Comic4.jpg",
      },
    ];
    
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 30
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "purple",
      // opacity: 1
  

    });
    entityEl.setAttribute("cursor-listener",{})

    return entityEl;
  },
  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 32
    });
    entityEl.setAttribute("scale",{x:0.8, y:0.8, z:0.8})
    entityEl.setAttribute("material", { src: item.url });
    entityEl.setAttribute("position",{x:0, y:0.8, z:0.1})
    return entityEl;
  },
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      // color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
});