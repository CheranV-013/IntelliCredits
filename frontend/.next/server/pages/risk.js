/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/risk";
exports.ids = ["pages/risk"];
exports.modules = {

/***/ "__barrel_optimize__?names=Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/es6/index.js":
/*!*******************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/es6/index.js ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Line: () => (/* reexport safe */ _cartesian_Line__WEBPACK_IMPORTED_MODULE_0__.Line),\n/* harmony export */   LineChart: () => (/* reexport safe */ _chart_LineChart__WEBPACK_IMPORTED_MODULE_1__.LineChart),\n/* harmony export */   ResponsiveContainer: () => (/* reexport safe */ _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer),\n/* harmony export */   Tooltip: () => (/* reexport safe */ _component_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Tooltip),\n/* harmony export */   XAxis: () => (/* reexport safe */ _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_4__.XAxis),\n/* harmony export */   YAxis: () => (/* reexport safe */ _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_5__.YAxis)\n/* harmony export */ });\n/* harmony import */ var _cartesian_Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartesian/Line */ \"./node_modules/recharts/es6/cartesian/Line.js\");\n/* harmony import */ var _chart_LineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/LineChart */ \"./node_modules/recharts/es6/chart/LineChart.js\");\n/* harmony import */ var _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/ResponsiveContainer */ \"./node_modules/recharts/es6/component/ResponsiveContainer.js\");\n/* harmony import */ var _component_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/Tooltip */ \"./node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cartesian/XAxis */ \"./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cartesian/YAxis */ \"./node_modules/recharts/es6/cartesian/YAxis.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_cartesian_Line__WEBPACK_IMPORTED_MODULE_0__, _chart_LineChart__WEBPACK_IMPORTED_MODULE_1__, _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_2__, _component_Tooltip__WEBPACK_IMPORTED_MODULE_3__, _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_4__, _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_5__]);\n([_cartesian_Line__WEBPACK_IMPORTED_MODULE_0__, _chart_LineChart__WEBPACK_IMPORTED_MODULE_1__, _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_2__, _component_Tooltip__WEBPACK_IMPORTED_MODULE_3__, _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_4__, _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1MaW5lLExpbmVDaGFydCxSZXNwb25zaXZlQ29udGFpbmVyLFRvb2x0aXAsWEF4aXMsWUF4aXMhPSEuL25vZGVfbW9kdWxlcy9yZWNoYXJ0cy9lczYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN1QztBQUNNO0FBQ3dCO0FBQ3hCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVkaXRpbnRlbC1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9yZWNoYXJ0cy9lczYvaW5kZXguanM/NWQwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IExpbmUgfSBmcm9tIFwiLi9jYXJ0ZXNpYW4vTGluZVwiXG5leHBvcnQgeyBMaW5lQ2hhcnQgfSBmcm9tIFwiLi9jaGFydC9MaW5lQ2hhcnRcIlxuZXhwb3J0IHsgUmVzcG9uc2l2ZUNvbnRhaW5lciB9IGZyb20gXCIuL2NvbXBvbmVudC9SZXNwb25zaXZlQ29udGFpbmVyXCJcbmV4cG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiLi9jb21wb25lbnQvVG9vbHRpcFwiXG5leHBvcnQgeyBYQXhpcyB9IGZyb20gXCIuL2NhcnRlc2lhbi9YQXhpc1wiXG5leHBvcnQgeyBZQXhpcyB9IGZyb20gXCIuL2NhcnRlc2lhbi9ZQXhpc1wiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/es6/index.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Frisk&preferredRegion=&absolutePagePath=.%2Fpages%2Frisk.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Frisk&preferredRegion=&absolutePagePath=.%2Fpages%2Frisk.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.tsx\");\n/* harmony import */ var _pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/risk.tsx */ \"./pages/risk.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__]);\n_pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/risk\",\n        pathname: \"/risk\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_risk_tsx__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGcmlzayZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGcmlzay50c3gmYWJzb2x1dGVBcHBQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9hcHAmYWJzb2x1dGVEb2N1bWVudFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2RvY3VtZW50Jm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRjtBQUNoQztBQUNMO0FBQzFEO0FBQ29EO0FBQ1Y7QUFDMUM7QUFDNkM7QUFDN0M7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLDRDQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLHVCQUF1Qix3RUFBSyxDQUFDLDRDQUFRO0FBQ3JDLHVCQUF1Qix3RUFBSyxDQUFDLDRDQUFRO0FBQ3JDLDJCQUEyQix3RUFBSyxDQUFDLDRDQUFRO0FBQ3pDLGVBQWUsd0VBQUssQ0FBQyw0Q0FBUTtBQUM3Qix3QkFBd0Isd0VBQUssQ0FBQyw0Q0FBUTtBQUM3QztBQUNPLGdDQUFnQyx3RUFBSyxDQUFDLDRDQUFRO0FBQzlDLGdDQUFnQyx3RUFBSyxDQUFDLDRDQUFRO0FBQzlDLGlDQUFpQyx3RUFBSyxDQUFDLDRDQUFRO0FBQy9DLGdDQUFnQyx3RUFBSyxDQUFDLDRDQUFRO0FBQzlDLG9DQUFvQyx3RUFBSyxDQUFDLDRDQUFRO0FBQ3pEO0FBQ08sd0JBQXdCLHlHQUFnQjtBQUMvQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELGlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlZGl0aW50ZWwtZnJvbnRlbmQvPzRlYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSBhcHAgYW5kIGRvY3VtZW50IG1vZHVsZXMuXG5pbXBvcnQgRG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9yaXNrLnRzeFwiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwiZ2V0U3RhdGljUHJvcHNcIik7XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTdGF0aWNQYXRoc1wiKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTZXJ2ZXJTaWRlUHJvcHNcIik7XG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuZXhwb3J0IGNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IGhvaXN0KHVzZXJsYW5kLCBcInJlcG9ydFdlYlZpdGFsc1wiKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFN0YXRpY1Byb3BzXCIpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUGF0aHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zXCIpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U2VydmVyUHJvcHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVMsXG4gICAgICAgIHBhZ2U6IFwiL3Jpc2tcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL3Jpc2tcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBcHAsXG4gICAgICAgIERvY3VtZW50XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Frisk&preferredRegion=&absolutePagePath=.%2Fpages%2Frisk.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./charts/TrendChart.tsx":
/*!*******************************!*\
  !*** ./charts/TrendChart.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TrendChart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"__barrel_optimize__?names=Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!./node_modules/recharts/es6/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_1__]);\n_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst data = [\n    {\n        month: \"Apr\",\n        revenue: 24,\n        debt: 10\n    },\n    {\n        month: \"May\",\n        revenue: 22,\n        debt: 11\n    },\n    {\n        month: \"Jun\",\n        revenue: 20,\n        debt: 12\n    },\n    {\n        month: \"Jul\",\n        revenue: 19,\n        debt: 13\n    },\n    {\n        month: \"Aug\",\n        revenue: 17,\n        debt: 15\n    },\n    {\n        month: \"Sep\",\n        revenue: 16,\n        debt: 16\n    }\n];\nfunction TrendChart() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: 220\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_1__.ResponsiveContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_1__.LineChart, {\n                data: data,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_1__.XAxis, {\n                        dataKey: \"month\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/charts/TrendChart.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_1__.YAxis, {}, void 0, false, {\n                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/charts/TrendChart.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {}, void 0, false, {\n                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/charts/TrendChart.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {\n                        type: \"monotone\",\n                        dataKey: \"revenue\",\n                        stroke: \"#0FB98B\",\n                        strokeWidth: 2\n                    }, void 0, false, {\n                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/charts/TrendChart.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {\n                        type: \"monotone\",\n                        dataKey: \"debt\",\n                        stroke: \"#F25F5C\",\n                        strokeWidth: 2\n                    }, void 0, false, {\n                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/charts/TrendChart.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/charts/TrendChart.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/charts/TrendChart.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/charts/TrendChart.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jaGFydHMvVHJlbmRDaGFydC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUY7QUFFdkYsTUFBTU0sT0FBTztJQUNYO1FBQUVDLE9BQU87UUFBT0MsU0FBUztRQUFJQyxNQUFNO0lBQUc7SUFDdEM7UUFBRUYsT0FBTztRQUFPQyxTQUFTO1FBQUlDLE1BQU07SUFBRztJQUN0QztRQUFFRixPQUFPO1FBQU9DLFNBQVM7UUFBSUMsTUFBTTtJQUFHO0lBQ3RDO1FBQUVGLE9BQU87UUFBT0MsU0FBUztRQUFJQyxNQUFNO0lBQUc7SUFDdEM7UUFBRUYsT0FBTztRQUFPQyxTQUFTO1FBQUlDLE1BQU07SUFBRztJQUN0QztRQUFFRixPQUFPO1FBQU9DLFNBQVM7UUFBSUMsTUFBTTtJQUFHO0NBQ3ZDO0FBRWMsU0FBU0M7SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLE9BQU87WUFBRUMsT0FBTztZQUFRQyxRQUFRO1FBQUk7a0JBQ3ZDLDRFQUFDVCx1SUFBbUJBO3NCQUNsQiw0RUFBQ0wsNkhBQVNBO2dCQUFDTSxNQUFNQTs7a0NBQ2YsOERBQUNKLHlIQUFLQTt3QkFBQ2EsU0FBUTs7Ozs7O2tDQUNmLDhEQUFDWix5SEFBS0E7Ozs7O2tDQUNOLDhEQUFDQywySEFBT0E7Ozs7O2tDQUNSLDhEQUFDSCx3SEFBSUE7d0JBQUNlLE1BQUs7d0JBQVdELFNBQVE7d0JBQVVFLFFBQU87d0JBQVVDLGFBQWE7Ozs7OztrQ0FDdEUsOERBQUNqQix3SEFBSUE7d0JBQUNlLE1BQUs7d0JBQVdELFNBQVE7d0JBQU9FLFFBQU87d0JBQVVDLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVkaXRpbnRlbC1mcm9udGVuZC8uL2NoYXJ0cy9UcmVuZENoYXJ0LnRzeD85ODI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmVDaGFydCwgTGluZSwgWEF4aXMsIFlBeGlzLCBUb29sdGlwLCBSZXNwb25zaXZlQ29udGFpbmVyIH0gZnJvbSBcInJlY2hhcnRzXCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHsgbW9udGg6IFwiQXByXCIsIHJldmVudWU6IDI0LCBkZWJ0OiAxMCB9LFxuICB7IG1vbnRoOiBcIk1heVwiLCByZXZlbnVlOiAyMiwgZGVidDogMTEgfSxcbiAgeyBtb250aDogXCJKdW5cIiwgcmV2ZW51ZTogMjAsIGRlYnQ6IDEyIH0sXG4gIHsgbW9udGg6IFwiSnVsXCIsIHJldmVudWU6IDE5LCBkZWJ0OiAxMyB9LFxuICB7IG1vbnRoOiBcIkF1Z1wiLCByZXZlbnVlOiAxNywgZGVidDogMTUgfSxcbiAgeyBtb250aDogXCJTZXBcIiwgcmV2ZW51ZTogMTYsIGRlYnQ6IDE2IH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyZW5kQ2hhcnQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogMjIwIH19PlxuICAgICAgPFJlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICAgIDxMaW5lQ2hhcnQgZGF0YT17ZGF0YX0+XG4gICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJtb250aFwiIC8+XG4gICAgICAgICAgPFlBeGlzIC8+XG4gICAgICAgICAgPFRvb2x0aXAgLz5cbiAgICAgICAgICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicmV2ZW51ZVwiIHN0cm9rZT1cIiMwRkI5OEJcIiBzdHJva2VXaWR0aD17Mn0gLz5cbiAgICAgICAgICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwiZGVidFwiIHN0cm9rZT1cIiNGMjVGNUNcIiBzdHJva2VXaWR0aD17Mn0gLz5cbiAgICAgICAgPC9MaW5lQ2hhcnQ+XG4gICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluZUNoYXJ0IiwiTGluZSIsIlhBeGlzIiwiWUF4aXMiLCJUb29sdGlwIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsImRhdGEiLCJtb250aCIsInJldmVudWUiLCJkZWJ0IiwiVHJlbmRDaGFydCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhS2V5IiwidHlwZSIsInN0cm9rZSIsInN0cm9rZVdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./charts/TrendChart.tsx\n");

/***/ }),

/***/ "./components/ExplanationPanel.tsx":
/*!*****************************************!*\
  !*** ./components/ExplanationPanel.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ExplanationPanel)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ExplanationPanel({ data }) {\n    const entries = Object.entries(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-3\",\n        children: entries.map(([key, value])=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-steel\",\n                        children: key.replace(/_/g, \" \")\n                    }, void 0, false, {\n                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/ExplanationPanel.tsx\",\n                        lineNumber: 7,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: value < 0 ? \"text-coral\" : \"text-mint\",\n                        children: [\n                            value > 0 ? \"+\" : \"\",\n                            (value * 100).toFixed(1),\n                            \"%\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/ExplanationPanel.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, key, true, {\n                fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/ExplanationPanel.tsx\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/ExplanationPanel.tsx\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGxhbmF0aW9uUGFuZWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQSxpQkFBaUIsRUFBRUMsSUFBSSxFQUFvQztJQUNqRixNQUFNQyxVQUFVQyxPQUFPRCxPQUFPLENBQUNEO0lBQy9CLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNaSCxRQUFRSSxHQUFHLENBQUMsQ0FBQyxDQUFDQyxLQUFLQyxNQUFNLGlCQUN4Qiw4REFBQ0o7Z0JBQWNDLFdBQVU7O2tDQUN2Qiw4REFBQ0k7d0JBQUtKLFdBQVU7a0NBQWNFLElBQUlHLE9BQU8sQ0FBQyxNQUFNOzs7Ozs7a0NBQ2hELDhEQUFDRDt3QkFBS0osV0FBV0csUUFBUSxJQUFJLGVBQWU7OzRCQUN6Q0EsUUFBUSxJQUFJLE1BQU07NEJBQ2pCQSxDQUFBQSxRQUFRLEdBQUUsRUFBR0csT0FBTyxDQUFDOzRCQUFHOzs7Ozs7OztlQUpwQko7Ozs7Ozs7Ozs7QUFVbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVkaXRpbnRlbC1mcm9udGVuZC8uL2NvbXBvbmVudHMvRXhwbGFuYXRpb25QYW5lbC50c3g/MWYyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeHBsYW5hdGlvblBhbmVsKHsgZGF0YSB9OiB7IGRhdGE6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gfSkge1xuICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgIHtlbnRyaWVzLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdGVlbFwiPntrZXkucmVwbGFjZSgvXy9nLCBcIiBcIil9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dmFsdWUgPCAwID8gXCJ0ZXh0LWNvcmFsXCIgOiBcInRleHQtbWludFwifT5cbiAgICAgICAgICAgIHt2YWx1ZSA+IDAgPyBcIitcIiA6IFwiXCJ9XG4gICAgICAgICAgICB7KHZhbHVlICogMTAwKS50b0ZpeGVkKDEpfSVcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRXhwbGFuYXRpb25QYW5lbCIsImRhdGEiLCJlbnRyaWVzIiwiT2JqZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwia2V5IiwidmFsdWUiLCJzcGFuIiwicmVwbGFjZSIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ExplanationPanel.tsx\n");

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst nav = [\n    {\n        label: \"Dashboard\",\n        href: \"/\"\n    },\n    {\n        label: \"Upload\",\n        href: \"/upload\"\n    },\n    {\n        label: \"Company\",\n        href: \"/company\"\n    },\n    {\n        label: \"Risk\",\n        href: \"/risk\"\n    },\n    {\n        label: \"CAM\",\n        href: \"/cam\"\n    }\n];\nfunction Layout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-cloud\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"bg-white border-b border-gray-200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-6xl mx-auto px-6 py-4 flex items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm uppercase tracking-widest text-steel\",\n                                    children: \"CREDITINTEL AI\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/Layout.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-xl font-semibold text-ink\",\n                                    children: \"Autonomous Credit Intelligence\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/Layout.tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/Layout.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex gap-4 text-sm\",\n                            children: nav.map((n)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: n.href,\n                                    className: \"text-steel hover:text-ink\",\n                                    children: n.label\n                                }, n.href, false, {\n                                    fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/Layout.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/Layout.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/Layout.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/Layout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"max-w-6xl mx-auto px-6 py-8\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/Layout.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/Layout.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzZCO0FBRTdCLE1BQU1DLE1BQU07SUFDVjtRQUFFQyxPQUFPO1FBQWFDLE1BQU07SUFBSTtJQUNoQztRQUFFRCxPQUFPO1FBQVVDLE1BQU07SUFBVTtJQUNuQztRQUFFRCxPQUFPO1FBQVdDLE1BQU07SUFBVztJQUNyQztRQUFFRCxPQUFPO1FBQVFDLE1BQU07SUFBUTtJQUMvQjtRQUFFRCxPQUFPO1FBQU9DLE1BQU07SUFBTztDQUM5QjtBQUVjLFNBQVNDLE9BQU8sRUFBRUMsUUFBUSxFQUEyQjtJQUNsRSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPRCxXQUFVOzBCQUNoQiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs7OENBQ0MsOERBQUNHO29DQUFFRixXQUFVOzhDQUErQzs7Ozs7OzhDQUM1RCw4REFBQ0c7b0NBQUdILFdBQVU7OENBQWlDOzs7Ozs7Ozs7Ozs7c0NBRWpELDhEQUFDTjs0QkFBSU0sV0FBVTtzQ0FDWk4sSUFBSVUsR0FBRyxDQUFDLENBQUNDLGtCQUNSLDhEQUFDWixrREFBSUE7b0NBQWNHLE1BQU1TLEVBQUVULElBQUk7b0NBQUVJLFdBQVU7OENBQ3hDSyxFQUFFVixLQUFLO21DQURDVSxFQUFFVCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3pCLDhEQUFDVTtnQkFBS04sV0FBVTswQkFBK0JGOzs7Ozs7Ozs7Ozs7QUFHckQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVkaXRpbnRlbC1mcm9udGVuZC8uL2NvbXBvbmVudHMvTGF5b3V0LnRzeD8zYzhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBuYXYgPSBbXG4gIHsgbGFiZWw6IFwiRGFzaGJvYXJkXCIsIGhyZWY6IFwiL1wiIH0sXG4gIHsgbGFiZWw6IFwiVXBsb2FkXCIsIGhyZWY6IFwiL3VwbG9hZFwiIH0sXG4gIHsgbGFiZWw6IFwiQ29tcGFueVwiLCBocmVmOiBcIi9jb21wYW55XCIgfSxcbiAgeyBsYWJlbDogXCJSaXNrXCIsIGhyZWY6IFwiL3Jpc2tcIiB9LFxuICB7IGxhYmVsOiBcIkNBTVwiLCBocmVmOiBcIi9jYW1cIiB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWNsb3VkXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTYgcHktNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQtc3RlZWxcIj5DUkVESVRJTlRFTCBBSTwvcD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmtcIj5BdXRvbm9tb3VzIENyZWRpdCBJbnRlbGxpZ2VuY2U8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICB7bmF2Lm1hcCgobikgPT4gKFxuICAgICAgICAgICAgICA8TGluayBrZXk9e24uaHJlZn0gaHJlZj17bi5ocmVmfSBjbGFzc05hbWU9XCJ0ZXh0LXN0ZWVsIGhvdmVyOnRleHQtaW5rXCI+XG4gICAgICAgICAgICAgICAge24ubGFiZWx9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNiBweS04XCI+e2NoaWxkcmVufTwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwibmF2IiwibGFiZWwiLCJocmVmIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJwIiwiaDEiLCJtYXAiLCJuIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ }),

/***/ "./components/Section.tsx":
/*!********************************!*\
  !*** ./components/Section.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Section)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Section({ title, children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-white border border-gray-200 rounded-2xl p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-lg font-semibold text-ink mb-4\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/Section.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/components/Section.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFZSxTQUFTQSxRQUFRLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUEwQztJQUN6RixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBdUNIOzs7Ozs7WUFDcERDOzs7Ozs7O0FBR1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVkaXRpbnRlbC1mcm9udGVuZC8uL2NvbXBvbmVudHMvU2VjdGlvbi50c3g/ZmFhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbih7IHRpdGxlLCBjaGlsZHJlbiB9OiB7IHRpdGxlOiBzdHJpbmc7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC0yeGwgcC02XCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtaW5rIG1iLTRcIj57dGl0bGV9PC9oMj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU2VjdGlvbiIsInRpdGxlIiwiY2hpbGRyZW4iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Section.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/_app.tsx\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDK0I7QUFFaEIsU0FBU0EsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxxQkFBTyw4REFBQ0Q7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVkaXRpbnRlbC1mcm9udGVuZC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufVxuIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/risk.tsx":
/*!************************!*\
  !*** ./pages/risk.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Risk)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section */ \"./components/Section.tsx\");\n/* harmony import */ var _components_ExplanationPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ExplanationPanel */ \"./components/ExplanationPanel.tsx\");\n/* harmony import */ var _charts_TrendChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../charts/TrendChart */ \"./charts/TrendChart.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_charts_TrendChart__WEBPACK_IMPORTED_MODULE_4__]);\n_charts_TrendChart__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst shap = {\n    debt_to_equity: -0.19,\n    news_sentiment: -0.14,\n    graph_risk_score: -0.11,\n    trend_risk_score: -0.09,\n    profitability: 0.07\n};\nfunction Risk() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid lg:grid-cols-2 gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: \"Explainable Decision Factors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExplanationPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            data: shap\n                        }, void 0, false, {\n                            fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: \"Trend Signals\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_charts_TrendChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"mt-3 text-sm text-steel space-y-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Revenue decreasing over last 4 quarters\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Debt increasing with higher interest burden\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Cash flow volatility detected\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid lg:grid-cols-3 gap-6 mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: \"Graph Risk Score\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-3xl font-semibold text-ink\",\n                                children: \"0.62\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-steel\",\n                                children: \"Promoter overlap + legal case exposure\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: \"Sector Outlook\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-3xl font-semibold text-ink\",\n                                children: \"Declining\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-steel\",\n                                children: \"Freight demand softening in FY26\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: \"Early Warning System\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"text-sm text-steel space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"GST revenue drop of 12% YoY\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Litigation flagged in eCourts\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Negative media spike\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cheranv/Documents/intelli_credit/frontend/pages/risk.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yaXNrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNFO0FBQ2tCO0FBQ2hCO0FBRTlDLE1BQU1JLE9BQU87SUFDWEMsZ0JBQWdCLENBQUM7SUFDakJDLGdCQUFnQixDQUFDO0lBQ2pCQyxrQkFBa0IsQ0FBQztJQUNuQkMsa0JBQWtCLENBQUM7SUFDbkJDLGVBQWU7QUFDakI7QUFFZSxTQUFTQztJQUN0QixxQkFDRSw4REFBQ1YsMERBQU1BOzswQkFDTCw4REFBQ1c7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDWCwyREFBT0E7d0JBQUNZLE9BQU07a0NBQ2IsNEVBQUNYLG9FQUFnQkE7NEJBQUNZLE1BQU1WOzs7Ozs7Ozs7OztrQ0FFMUIsOERBQUNILDJEQUFPQTt3QkFBQ1ksT0FBTTs7MENBQ2IsOERBQUNWLDBEQUFVQTs7Ozs7MENBQ1gsOERBQUNZO2dDQUFHSCxXQUFVOztrREFDWiw4REFBQ0k7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0E7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0E7a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLViw4REFBQ0w7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDWCwyREFBT0E7d0JBQUNZLE9BQU07OzBDQUNiLDhEQUFDSTtnQ0FBRUwsV0FBVTswQ0FBa0M7Ozs7OzswQ0FDL0MsOERBQUNLO2dDQUFFTCxXQUFVOzBDQUFxQjs7Ozs7Ozs7Ozs7O2tDQUVwQyw4REFBQ1gsMkRBQU9BO3dCQUFDWSxPQUFNOzswQ0FDYiw4REFBQ0k7Z0NBQUVMLFdBQVU7MENBQWtDOzs7Ozs7MENBQy9DLDhEQUFDSztnQ0FBRUwsV0FBVTswQ0FBcUI7Ozs7Ozs7Ozs7OztrQ0FFcEMsOERBQUNYLDJEQUFPQTt3QkFBQ1ksT0FBTTtrQ0FDYiw0RUFBQ0U7NEJBQUdILFdBQVU7OzhDQUNaLDhEQUFDSTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVkaXRpbnRlbC1mcm9udGVuZC8uL3BhZ2VzL3Jpc2sudHN4P2JiMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25cIjtcbmltcG9ydCBFeHBsYW5hdGlvblBhbmVsIGZyb20gXCIuLi9jb21wb25lbnRzL0V4cGxhbmF0aW9uUGFuZWxcIjtcbmltcG9ydCBUcmVuZENoYXJ0IGZyb20gXCIuLi9jaGFydHMvVHJlbmRDaGFydFwiO1xuXG5jb25zdCBzaGFwID0ge1xuICBkZWJ0X3RvX2VxdWl0eTogLTAuMTksXG4gIG5ld3Nfc2VudGltZW50OiAtMC4xNCxcbiAgZ3JhcGhfcmlza19zY29yZTogLTAuMTEsXG4gIHRyZW5kX3Jpc2tfc2NvcmU6IC0wLjA5LFxuICBwcm9maXRhYmlsaXR5OiAwLjA3XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSaXNrKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJFeHBsYWluYWJsZSBEZWNpc2lvbiBGYWN0b3JzXCI+XG4gICAgICAgICAgPEV4cGxhbmF0aW9uUGFuZWwgZGF0YT17c2hhcH0gLz5cbiAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIlRyZW5kIFNpZ25hbHNcIj5cbiAgICAgICAgICA8VHJlbmRDaGFydCAvPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC0zIHRleHQtc20gdGV4dC1zdGVlbCBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxsaT5SZXZlbnVlIGRlY3JlYXNpbmcgb3ZlciBsYXN0IDQgcXVhcnRlcnM8L2xpPlxuICAgICAgICAgICAgPGxpPkRlYnQgaW5jcmVhc2luZyB3aXRoIGhpZ2hlciBpbnRlcmVzdCBidXJkZW48L2xpPlxuICAgICAgICAgICAgPGxpPkNhc2ggZmxvdyB2b2xhdGlsaXR5IGRldGVjdGVkPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L1NlY3Rpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0zIGdhcC02IG10LTZcIj5cbiAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJHcmFwaCBSaXNrIFNjb3JlXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWlua1wiPjAuNjI8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXN0ZWVsXCI+UHJvbW90ZXIgb3ZlcmxhcCArIGxlZ2FsIGNhc2UgZXhwb3N1cmU8L3A+XG4gICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJTZWN0b3IgT3V0bG9va1wiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmtcIj5EZWNsaW5pbmc8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXN0ZWVsXCI+RnJlaWdodCBkZW1hbmQgc29mdGVuaW5nIGluIEZZMjY8L3A+XG4gICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJFYXJseSBXYXJuaW5nIFN5c3RlbVwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc3RlZWwgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8bGk+R1NUIHJldmVudWUgZHJvcCBvZiAxMiUgWW9ZPC9saT5cbiAgICAgICAgICAgIDxsaT5MaXRpZ2F0aW9uIGZsYWdnZWQgaW4gZUNvdXJ0czwvbGk+XG4gICAgICAgICAgICA8bGk+TmVnYXRpdmUgbWVkaWEgc3Bpa2U8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlNlY3Rpb24iLCJFeHBsYW5hdGlvblBhbmVsIiwiVHJlbmRDaGFydCIsInNoYXAiLCJkZWJ0X3RvX2VxdWl0eSIsIm5ld3Nfc2VudGltZW50IiwiZ3JhcGhfcmlza19zY29yZSIsInRyZW5kX3Jpc2tfc2NvcmUiLCJwcm9maXRhYmlsaXR5IiwiUmlzayIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGF0YSIsInVsIiwibGkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/risk.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "eventemitter3":
/*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("eventemitter3");

/***/ }),

/***/ "lodash/every":
/*!*******************************!*\
  !*** external "lodash/every" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/every");

/***/ }),

/***/ "lodash/find":
/*!******************************!*\
  !*** external "lodash/find" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/find");

/***/ }),

/***/ "lodash/flatMap":
/*!*********************************!*\
  !*** external "lodash/flatMap" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/flatMap");

/***/ }),

/***/ "lodash/get":
/*!*****************************!*\
  !*** external "lodash/get" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/get");

/***/ }),

/***/ "lodash/isBoolean":
/*!***********************************!*\
  !*** external "lodash/isBoolean" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isBoolean");

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ "lodash/isFunction":
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isFunction");

/***/ }),

/***/ "lodash/isNaN":
/*!*******************************!*\
  !*** external "lodash/isNaN" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNaN");

/***/ }),

/***/ "lodash/isNil":
/*!*******************************!*\
  !*** external "lodash/isNil" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNil");

/***/ }),

/***/ "lodash/isNumber":
/*!**********************************!*\
  !*** external "lodash/isNumber" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNumber");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isObject");

/***/ }),

/***/ "lodash/isPlainObject":
/*!***************************************!*\
  !*** external "lodash/isPlainObject" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isPlainObject");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isString");

/***/ }),

/***/ "lodash/last":
/*!******************************!*\
  !*** external "lodash/last" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/last");

/***/ }),

/***/ "lodash/mapValues":
/*!***********************************!*\
  !*** external "lodash/mapValues" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/mapValues");

/***/ }),

/***/ "lodash/max":
/*!*****************************!*\
  !*** external "lodash/max" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/max");

/***/ }),

/***/ "lodash/memoize":
/*!*********************************!*\
  !*** external "lodash/memoize" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/memoize");

/***/ }),

/***/ "lodash/min":
/*!*****************************!*\
  !*** external "lodash/min" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/min");

/***/ }),

/***/ "lodash/range":
/*!*******************************!*\
  !*** external "lodash/range" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/range");

/***/ }),

/***/ "lodash/some":
/*!******************************!*\
  !*** external "lodash/some" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/some");

/***/ }),

/***/ "lodash/sortBy":
/*!********************************!*\
  !*** external "lodash/sortBy" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/sortBy");

/***/ }),

/***/ "lodash/throttle":
/*!**********************************!*\
  !*** external "lodash/throttle" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/throttle");

/***/ }),

/***/ "lodash/uniqBy":
/*!********************************!*\
  !*** external "lodash/uniqBy" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/uniqBy");

/***/ }),

/***/ "lodash/upperFirst":
/*!************************************!*\
  !*** external "lodash/upperFirst" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/upperFirst");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-smooth":
/*!*******************************!*\
  !*** external "react-smooth" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-smooth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "recharts-scale":
/*!*********************************!*\
  !*** external "recharts-scale" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("recharts-scale");

/***/ }),

/***/ "victory-vendor/d3-scale":
/*!******************************************!*\
  !*** external "victory-vendor/d3-scale" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("victory-vendor/d3-scale");

/***/ }),

/***/ "victory-vendor/d3-shape":
/*!******************************************!*\
  !*** external "victory-vendor/d3-shape" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("victory-vendor/d3-shape");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ }),

/***/ "tiny-invariant":
/*!*********************************!*\
  !*** external "tiny-invariant" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("tiny-invariant");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/recharts"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Frisk&preferredRegion=&absolutePagePath=.%2Fpages%2Frisk.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();