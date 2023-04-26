import React, { useRef } from 'react';
import * as ReactDOMServer from "react-dom/server";
import { ImageOverlay, LayerGroup, MapContainer, Marker, Polygon, Popup, useMap } from 'react-leaflet'
// @ts-ignore
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import * as L from 'leaflet';
import { LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import Image from "next/image";

import BasePrimary from "@/components/my-way/map/basePrimary";
import BaseSecondary from "@/components/my-way/map/baseSecondary";
import HelpingTools from "@/components/my-way/map/helpingTools";
import MultiHelperTools from "@/components/my-way/map/multiHelperTools";
import MultiWorkingTools from "@/components/my-way/map/multiWorkingTools";
import MultiWorkingToolsAndHelperTools from "@/components/my-way/map/multiWorkingToolsAndHelperTools";
import WorkingTools from "@/components/my-way/map/workingTools";

import 'leaflet-curve';

import cameraIcon from "../../../../public/assets/my-way/camera-icon.svg"
import closeIcon from "../../../../public/assets/my-way/close-icon.svg"
import journeyMap from "../../../../public/assets/my-way/map-bg.svg"
import timeIcon from "../../../../public/assets/my-way/time-icon.svg"

import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const RESIZE_MAP_TIMEOUT_MS = 300;

//costume CRS layer
const CRSPixel = L.Util.extend(L.CRS.Simple, {
  transformation: new L.Transformation(1, 0, 1, 0),
  infinite: false
});

//Triangle markers draw polygons coords
const trianglePolygon1: Array<[number, number]> = [
  [520, 150],
  [520, 500],
  [420, 300],
];

const trianglePolygon2: Array<[number, number]> = [
  [520, 800],
  [520, 1100],
  [370, 950],
];

const trianglePolygon3: Array<[number, number]> = [
  [360, 600],
  [280, 820],
  [180, 750],
];

const trianglePolygon4: Array<[number, number]> = [
  [370, 450],
  [365, 600],
  [300, 550],
];

const trianglePolygon5: Array<[number, number]> = [
  [370, 320],
  [300, 500],
  [260, 430],
];

const trianglePolygon6: Array<[number, number]> = [
  [440, 600],
  [400, 830],
  [340, 750],
];

const primaryTaskOptions = [
  {
    position: [515, 615],
    color: "#FF4F66",
  },
  {
    position: [457, 690],
    color: "#FF4F66",
  },
  {
    position: [363, 887],
    color: "#C99664",

  },
  {
    position: [335, 840],
    color: "#C99664",
  },
  {
    position: [329, 770],
    active: true,
    color: "#143E29",
  },
  {
    position: [420, 585],
  },
  {
    position: [450, 380],
  },
  {
    position: [365, 415],
  },
  {
    position: [285, 575],
  },
  {
    position: [173, 659],
  },
];

const secondaryTaskOptions = [
  {
    position: [472, 585],
    count: 5,
    color: "#FF4F66"
  },
  {
    position: [495, 675],
    count: 1,
    color: "#FF4F66"
  },
  {
    position: [380, 843],
    count: 5,
    color: "#C99664"
  },
  {
    position: [355, 800],
    count: 3,
    color: "#C99664"
  },
  {
    position: [380, 590],

  },
  {
    position: [390, 450],
  },
  {
    position: [310, 610],

  },
  {
    position: [205, 685],

  },
  {
    position: [200, 620],

  },

];

//function for get random coords in triangle polygon
function randomPointInTriangle(triangleCoords: Array<[number, number]>) {
  const [a, b, c] = triangleCoords;

  const r1 = Math.random();
  const r2 = Math.random();
  const sqrtR1 = Math.sqrt(r1);
  const x = (1 - sqrtR1) * a[0] + (sqrtR1 * (1 - r2)) * b[0] + (sqrtR1 * r2) * c[0];
  const y = (1 - sqrtR1) * a[1] + (sqrtR1 * (1 - r2)) * b[1] + (sqrtR1 * r2) * c[1];
  return [x, y];
}

const drawMarkersAtPolygon = (polygon: Array<[number, number]>, marker: JSX.Element, markerType: string, count: number, popup?: JSX.Element) => {
  const markers = [];
  for (let i = 0; i < count; i++) {

    let point: LatLngExpression = randomPointInTriangle(polygon).map(num => parseFloat(num.toFixed(4))) as LatLngExpression;
    markers.push(
      <Marker icon={categoriesIconWrapper(marker)} {...{markerType: markerType}} position={point}>
        {popup}
      </Marker>
    );
  }
  return markers;
}

const CostumePopupContainer: React.FC<{ children?: JSX.Element }> = ({children}) => {
  const popupRef = useRef(null)

  const closePopupFunc = () => {
    if (popupRef.current) {
      // @ts-ignore
      popupRef.current?.remove();
    }
  }

  return (
    <Popup ref={popupRef} closeButton={false}>
      <div className="relative flex">
        <button onClick={closePopupFunc}>
          <Image
            src={closeIcon}
            width={18}
            height={18}
            alt="close"
            className="absolute top-[-5px] left-[-13px]"
          />
        </button>
        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-[4px]">
            <Image
              src={cameraIcon}
              width={16}
              height={18}
              alt="camera"
              className=""
            />
            <p className="!m-0">סרטון</p>
          </div>
          <div className="text-right flex flex-col font-medium text-[18px]">
            <p className="!m-0">ראיון עבודה - סוגים שונים של</p>
            <p className="!m-0"> תהליכי מיון, שלבים שונים</p>
          </div>
          <div className="flex gap-[8px] text-[14px] text-right">
            <p className="!m-0">כלי עבודה בסיסיים</p>
            <div className="flex justify-center items-center py-[3px]">
              <div className="h-[12px] border-r border-r-[#DADADA]">
              </div>
            </div>
            <Image
              src={timeIcon}
              width={14}
              height={12}
              alt="time"
              className=""
            />
            <p className="!m-0">
              זמן מוערך: 3 דקות
            </p>
          </div>
        </div>
      </div>
    </Popup>
  )
}

//bezier coordinates for draw line
const curveCoordinates = [
  [
    "M", [510, 615], "C", [470, 630], [470, 630], [455, 685],
  ],
  [
    "M", [455, 685], "C", [445, 845], [425, 885], [361, 889],
  ],
  [
    "M", [361, 889], "C", [260, 780], [390, 650], [415, 590],
  ],
  [
    "M", [415, 590], "C", [440, 560], [520, 450], [447, 380]
  ],
  [
    "M", [447, 380], "C", [445, 400], [390, 375], [362, 415]
  ],
  [
    "M", [362, 415], "C", [300, 455], [320, 510], [280, 580]
  ],
  [
    "M", [280, 580], "C", [260, 675], [230, 650], [170, 660]
  ],
]

//draw bezier line
const CustomCurve = () => {
  const map = useMap();
  L.curve(curveCoordinates[0],
    {color: '#4F6F5F', fill: false, dashArray: "0,0",}).addTo(map);
  L.curve(curveCoordinates[1],
    {color: '#4F6F5F', fill: false, dashArray: "0,0",}).addTo(map);
  L.curve(curveCoordinates[2],
    {color: '#4F6F5F', fill: false, dashArray: "10,10",}).addTo(map);
  L.curve(curveCoordinates[3],
    {color: '#4F6F5F', fill: false, dashArray: "10,10",}).addTo(map);
  L.curve(curveCoordinates[4],
    {color: '#4F6F5F', fill: false, dashArray: "10,10",}).addTo(map);
  L.curve(curveCoordinates[5],
    {color: '#4F6F5F', fill: false, dashArray: "10,10",}).addTo(map);
  L.curve(curveCoordinates[6],
    {color: '#4F6F5F', fill: false, dashArray: "10,10",}).addTo(map);

  //bind map moving view
  map.on('drag', function () {
    return map.panInsideBounds([[0, 0], [557, 1265]], {animate: false});
  });

  setTimeout(() => {
    map.invalidateSize({pan: false, animate: true});
  }, RESIZE_MAP_TIMEOUT_MS)

  return null;
};

const basePrimaryComponentIcon = (color?: string, active?: boolean) => {
  return L.divIcon({
    className: "",
    html: ReactDOMServer.renderToString(<BasePrimary color={color}
                                                     active={active}/>),
    iconSize: [60, 30],
    popupAnchor: active ? [0, -110] : [0, -20],
    iconAnchor: [30, 30],
  });
}

const baseSecondaryComponentIcon = (className?: string, count?: number, color?: string) => {
  return L.divIcon({
    className: "",
    html: ReactDOMServer.renderToString(<BaseSecondary className={className} count={count} color={color}/>),
    iconSize: [40, 20],
    iconAnchor: [10, 10],
  });
}

const categoriesIconWrapper = (children: JSX.Element) => {
  return L.divIcon({
    className: "",
    html: ReactDOMServer.renderToString(children),
    iconSize: [15, 27],
    popupAnchor: [-5, -20],
    iconAnchor: [15, 15],
  });
}

const multiHelperToolsIcon = (className?: string) => {
  return L.divIcon({
    className: "",
    html: ReactDOMServer.renderToString(<MultiHelperTools className={className}/>),
    iconSize: [40, 20],
    iconAnchor: [0, 0],
  });
}

const multiWorkingToolsIcon = (className?: string) => {
  return L.divIcon({
    className: "",
    html: ReactDOMServer.renderToString(<MultiWorkingTools/>),
    iconSize: [40, 20],
    iconAnchor: [20, 10],
  });
}

const multiWorkingToolsAndHelperToolsIcon = (className?: string) => {
  return L.divIcon({
    className: "sign",
    html: ReactDOMServer.renderToString(<MultiWorkingToolsAndHelperTools/>),
    iconSize: [40, 20],
    iconAnchor: [0, 0],
  });
}

const MarkerComponentGroup: React.FC<{ children: JSX.Element }> = ({children}) => {
  const groupRef = useRef()

  function markerTypeHandler(markerTypes: string[]) {

    if (markerTypes.includes('workingTools') && markerTypes.includes('helpingTools')) {
      return "workingTools&helpingTools";
    }

    if (markerTypes.every(value => value === "workingTools")) {
      return "workingTools";
    }

    if (markerTypes.every(value => value === "helpingTools")) {
      return "helpingTools";
    }
    return null
  }


  const cluster = function (cluster: { getAllChildMarkers: () => []; }) {
    let getMarkerTypes = cluster.getAllChildMarkers().map((child: { options: { markerType: string } }) => {
      return child.options.markerType
    });

    if (getMarkerTypes.length >= 2 && markerTypeHandler(getMarkerTypes) === 'workingTools&helpingTools') {
      return L.divIcon({html: multiWorkingToolsAndHelperToolsIcon().options.html, className: ""});
    }

    if (getMarkerTypes.length >= 2 && markerTypeHandler(getMarkerTypes) === "workingTools") {
      return L.divIcon({html: multiWorkingToolsIcon().options.html, className: ""});
    }

    if (getMarkerTypes.length >= 2 && markerTypeHandler(getMarkerTypes) === "helpingTools") {
      return L.divIcon({html: multiHelperToolsIcon().options.html, className: ""});
    }

    return null;
  }

  return (
    <div>
      <MarkerClusterGroup showCoverageOnHover={false} maxClusterRadius={40} iconCreateFunction={cluster} ref={groupRef}>
        {children}
      </MarkerClusterGroup>
    </div>
  )
}

const Map = () => {
  const imageBounds: LatLngBoundsExpression | undefined = [[0, 0], [557, 1265]];
  //set true for show polygons
  const debugPolygonsMode = false

  return (
    <div dir="rtl">
      <MapContainer attributionControl={false}
                    maxBoundsViscosity={1.0}
                    crs={CRSPixel}
                    maxBounds={imageBounds}
                    className="h-[557px] !bg-[#FFFFFF]"
                    center={[0, 300]}
                    zoom={0}
                    maxZoom={3}
                    scrollWheelZoom={true}
      >
        {
          debugPolygonsMode && (
            <>
              <Polygon
                positions={trianglePolygon1}
                fillOpacity={0.5}
                color={'blue'}
              />
              <Polygon
                positions={trianglePolygon2}
                fillOpacity={0.5}
                color={'blue'}
              />
              <Polygon
                positions={trianglePolygon3}
                fillOpacity={0.5}
                color={'blue'}
              />
              <Polygon
                positions={trianglePolygon4}
                fillOpacity={0.5}
                color={'blue'}
              />
              <Polygon
                positions={trianglePolygon5}
                fillOpacity={0.5}
                color={'blue'}
              />
              <Polygon
                positions={trianglePolygon6}
                fillOpacity={0.5}
                color={'blue'}
              />
            </>
          )
        }

        <LayerGroup>
          <ImageOverlay url={journeyMap.src} bounds={imageBounds}/>
        </LayerGroup>

        {primaryTaskOptions.map((task, index) => {
          return (
            <Marker key={index} icon={basePrimaryComponentIcon(task.color, task.active)} position={task.position as LatLngExpression}>
              <CostumePopupContainer/>
            </Marker>
          )
        })}

        {secondaryTaskOptions.map((task, index) => {
          return (
            <Marker key={index} icon={baseSecondaryComponentIcon("", task.count, task.color)} position={task.position as LatLngExpression}>
            </Marker>
          )
        })}

        <MarkerComponentGroup>
          <>
            {drawMarkersAtPolygon(trianglePolygon1, <WorkingTools/>, 'workingTools', 3, <CostumePopupContainer/>)}
            {drawMarkersAtPolygon(trianglePolygon1, <HelpingTools/>, 'helpingTools', 3)}
            {drawMarkersAtPolygon(trianglePolygon1, <HelpingTools/>, 'helpingTools', 3)}
            {drawMarkersAtPolygon(trianglePolygon1, <HelpingTools/>, 'helpingTools', 3)}

            {drawMarkersAtPolygon(trianglePolygon2, <WorkingTools/>, 'workingTools', 3)}
            {drawMarkersAtPolygon(trianglePolygon2, <HelpingTools/>, 'helpingTools', 3)}

            {drawMarkersAtPolygon(trianglePolygon3, <WorkingTools/>, 'workingTools', 3)}
            {drawMarkersAtPolygon(trianglePolygon3, <HelpingTools/>, 'helpingTools', 3)}
          </>
        </MarkerComponentGroup>

        <CustomCurve/>

      </MapContainer>
    </div>
  );
};

export default Map;