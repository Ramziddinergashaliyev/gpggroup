import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import "./mapChart.scss";

const DISTRIBUTORS = [
    { title: "Aysan-S", country: "Azerbaijan", latitude: 40.5855, longitude: 49.6317 },
    { title: "Rowanaawtohyzmatlar", country: "Turkmenistan", latitude: 37.9059, longitude: 58.3973 },
    { title: "Demirdag Auto Parts", country: "Turkmenistan", latitude: 37.5800, longitude: 62.0500 },
    { title: "Nuryyew Kakajan", country: "Turkmenistan", latitude: 37.9200, longitude: 58.5100 },
    { title: "AUTOLUX", country: "Turkmenistan", latitude: 39.0041, longitude: 63.5688 },
    { title: "ABRI GUZAR", country: "Tajikistan", latitude: 39.8773, longitude: 69.0255 },
    { title: "OilProfi", country: "Kyrgyzstan", latitude: 42.8746, longitude: 74.5698 },
];

const ACTIVE_COUNTRY_IDS = new Set(["AZ", "TM", "TJ", "KG"]);

const COUNTRY_ID_MAP = {
    Azerbaijan: "AZ",
    Turkmenistan: "TM",
    Tajikistan: "TJ",
    Kyrgyzstan: "KG",
};

const MapChart = () => {
    useEffect(() => {
        const root = am5.Root.new("chartdiv");
        if (root._logo) root._logo.dispose();
        root.setThemes([am5themes_Animated.new(root)]);

        const map = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "translateX",
                panY: "translateY",
                projection: am5map.geoNaturalEarth1(),
            })
        );

        const polygonSeries = map.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                exclude: ["AQ"],
            })
        );

        polygonSeries.mapPolygons.template.setAll({
            fill: am5.color(0xbbbbbb),
            stroke: am5.color(0xe0e0e0),
            strokeWidth: 0.5,
            interactive: false,
            tooltipText: "",
        });

        const activeSeries = map.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                include: ["AZ", "TM", "TJ", "KG"],
            })
        );

        activeSeries.mapPolygons.template.setAll({
            fill: am5.color(0x479cd2),
            fillOpacity: 0.20,
            stroke: am5.color(0x479cd2),
            strokeWidth: 1,
            interactive: true,
            cursorOverStyle: "default",
            tooltipText: "{name}",
        });

        activeSeries.set("tooltip", am5.Tooltip.new(root, {
            getFillFromSprite: false,
            getStrokeFromSprite: false,
            autoTextColor: false,
            background: am5.RoundedRectangle.new(root, {
                fill: am5.color(0x1a1a1a),
                fillOpacity: 0.85,
                cornerRadiusTL: 4,
                cornerRadiusTR: 4,
                cornerRadiusBL: 4,
                cornerRadiusBR: 4,
            }),
        }));

        activeSeries.get("tooltip").label.setAll({
            fill: am5.color(0xffffff),
            fontSize: "0.80em",
        });

        activeSeries.mapPolygons.template.states.create("hover", {
            fill: am5.color(0x479cd2),
            fillOpacity: 0.50,
            stroke: am5.color(0x2a7db5),
            strokeWidth: 1.5,
        });

        const pointSeries = map.series.push(am5map.MapPointSeries.new(root, {}));

        const mainColor = am5.color(0x479cd2);
        const whiteColor = am5.color(0xffffff);
        const darkColor = am5.color(0x1a1a1a);

        pointSeries.bullets.push((root, series, dataItem) => {
            const container = am5.Container.new(root, {
                cursorOverStyle: "pointer",
                centerX: am5.p50,
                centerY: am5.p100,
            });

            container.children.push(am5.Line.new(root, {
                stroke: mainColor,
                strokeWidth: 2,
                x: 0,
                y: 0,
                height: -44,
            }));

            const pinOuter = am5.Circle.new(root, {
                radius: 10,
                fill: mainColor,
                stroke: whiteColor,
                strokeWidth: 2,
                dy: -44,
            });
            container.children.push(pinOuter);

            container.children.push(am5.Circle.new(root, {
                radius: 3,
                fill: whiteColor,
                dy: -44,
            }));

            const tooltip = am5.Label.new(root, {
                text: dataItem.dataContext.title,
                fill: whiteColor,
                background: am5.RoundedRectangle.new(root, {
                    fill: darkColor,
                    fillOpacity: 0.85,
                    cornerRadiusTL: 4,
                    cornerRadiusTR: 4,
                    cornerRadiusBL: 4,
                    cornerRadiusBR: 4,
                }),
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 8,
                paddingRight: 8,
                fontSize: "0.78em",
                centerX: am5.p50,
                centerY: am5.p100,
                dy: -68,
                opacity: 0,
                layer: 50,
            });
            container.children.push(tooltip);

            const hitArea = am5.Circle.new(root, {
                radius: 18,
                fill: am5.color(0x000000),
                fillOpacity: 0,
                dy: -44,
                layer: 40,
                cursorOverStyle: "pointer",
            });
            container.children.push(hitArea);

            const onOver = () => {
                tooltip.animate({ key: "opacity", to: 1, duration: 150 });
                pinOuter.animate({ key: "radius", to: 13, duration: 150 });
                pinOuter.set("fill", am5.color(0x2a7db5));

                const id = COUNTRY_ID_MAP[dataItem.dataContext.country];
                if (id) {
                    activeSeries.mapPolygons.each((p) => {
                        if (p.dataItem?.get("id") === id) p.states.apply("hover");
                    });
                }
            };

            const onOut = () => {
                tooltip.animate({ key: "opacity", to: 0, duration: 150 });
                pinOuter.animate({ key: "radius", to: 10, duration: 150 });
                pinOuter.set("fill", mainColor);

                const id = COUNTRY_ID_MAP[dataItem.dataContext.country];
                if (id) {
                    activeSeries.mapPolygons.each((p) => {
                        if (p.dataItem?.get("id") === id) p.states.apply("default");
                    });
                }
            };

            hitArea.events.on("pointerover", onOver);
            hitArea.events.on("pointerout", onOut);
            pinOuter.events.on("pointerover", onOver);
            pinOuter.events.on("pointerout", onOut);

            return am5.Bullet.new(root, { sprite: container });
        });

        pointSeries.data.setAll(
            DISTRIBUTORS.map((d) => ({
                geometry: { type: "Point", coordinates: [d.longitude, d.latitude] },
                title: d.title,
                country: d.country,
            }))
        );

        return () => root.dispose();
    }, []);

    return (
        <div
            id="chartdiv"
            style={{ width: "100%", height: "600px", backgroundColor: "#fff" }}
        />
    );
};

export default MapChart;