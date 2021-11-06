// map
const element = document.getElementById("popup");

const init = () => {
  const map = new ol.Map({
    view: new ol.View({
      center: [2258840.95146215, 7014873.172806342],
      zoom: 16,
      minZoom: 4,
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    target: "mapOSM",
  });

  const popup = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [
        new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([20.291264854716047, 53.17193059044489])
          ),
        }),
      ],
    }),
  });
  map.addLayer(popup);

  const container = document.getElementById("popup");
  const content = document.getElementById("popup-content");
  const closer = document.getElementById("popup-closer");

  const overlay = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
      duration: 250,
    },
  });
  closer.onclick = function () {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
  };
  content.innerText = "Tutaj Mnie znajdziesz";
  overlay.setPosition(
    ol.proj.fromLonLat([20.29139091852625, 53.172160499287564])
  );
  map.addOverlay(overlay);
};

window.onload = init;
// 53.17198364644101, 20.291243397046223;
53.172160499287564, 20.29139091852625;
