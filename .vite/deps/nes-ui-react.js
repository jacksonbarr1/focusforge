import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __commonJS,
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x2) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x2) {
                var match = x2.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x2) {
                  control = x2;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x2) {
                  control = x2;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x2) {
                control = x2;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x2) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k2) {
                  return k2 !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/nes-ui-react/dist/index.js
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var import_react3 = __toESM(require_react());
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var import_react4 = __toESM(require_react());
var import_react5 = __toESM(require_react());
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var import_react6 = __toESM(require_react());
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var import_react7 = __toESM(require_react());
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var g = (e, t, r, n = false) => {
  let s = false;
  new MutationObserver((i) => {
    for (let a of i) if (a.type === "attributes" && a.attributeName === "class") {
      let c = a.target.classList.contains(t);
      s !== c && (s = c, r(c));
    }
  }).observe(e, { attributes: true }), n && r(e.classList.contains(t));
};
var d = "nes-ui-dark-mode";
var Ae = () => typeof document < "u" && document.documentElement.classList.contains(d);
var v = (e) => {
  document.documentElement.classList.toggle(d, e);
  try {
    localStorage.setItem(d, e ? "true" : "false");
  } catch {
  }
};
var I = () => {
  let e = !!window.matchMedia("(prefers-color-scheme: dark)"), t = false;
  try {
    t = localStorage.getItem(d) !== null;
  } catch {
  }
  let r = false;
  return t ? r = localStorage.getItem(d) === "true" : r = e, r;
};
var S = (e, t = true) => {
  g(document.documentElement, d, e, t);
};
var m = (e, ...t) => {
  let r = { ...e };
  return t.forEach((n) => {
    delete r[n];
  }), r;
};
var W = ["transparent", "dense"];
var we = (e) => {
  var _a;
  return (0, import_jsx_runtime.jsx)("a", { ...m(e, ...W), className: `nes-ui-anchor ${e.className ? e.className : ""}${e.transparent ? " nes-ui-is-transparent" : ""}${e.dense ? " nes-ui-is-dense" : ""}`, style: { ...e.style, visibility: e.name ? "hidden" : ((_a = e.style) == null ? void 0 : _a.visibility) || "inherit" }, children: e.children });
};
var x = ((o) => (o.primary = "#209cee", o.success = "#92cc41", o.warning = "#f7d51d", o.error = "#e76e55", o.disabled = "#888", o.black = "#000", o.dark = "#212529", o.white = "#fff", o.color00 = "#59595f", o.color01 = "#00008f", o.color02 = "#18008f", o.color03 = "#3f0077", o.color04 = "#550055", o.color05 = "#550011", o.color06 = "#550000", o.color07 = "#442200", o.color08 = "#333300", o.color09 = "#113300", o.color0A = "#003311", o.color0B = "#004444", o.color0C = "#004466", o.color0D = "#000000", o.color0E = "#080808", o.color0F = "#080808", o.color10 = "#aaaaaa", o.color11 = "#0044dd", o.color12 = "#5511ee", o.color13 = "#7700ee", o.color14 = "#9900bb", o.color15 = "#aa0055", o.color16 = "#993300", o.color17 = "#884400", o.color18 = "#666600", o.color19 = "#336600", o.color1A = "#006600", o.color1B = "#006655", o.color1C = "#005588", o.color1D = "#080808", o.color1E = "#080808", o.color1F = "#080808", o.color20 = "#eeeeee", o.color21 = "#4488ff", o.color22 = "#7777ff", o.color23 = "#9944ff", o.color24 = "#bb44ee", o.color25 = "#cc5599", o.color26 = "#dd6644", o.color27 = "#cc8800", o.color28 = "#bbaa00", o.color29 = "#77bb00", o.color2A = "#22bb22", o.color2B = "#22bb77", o.color2C = "#22bbcc", o.color2D = "#444444", o.color2E = "#080808", o.color2F = "#080808", o.color30 = "#eeeeee", o.color31 = "#99ccff", o.color32 = "#aaaaff", o.color33 = "#bb99ff", o.color34 = "#dd99ff", o.color35 = "#ee99dd", o.color36 = "#eeaaaa", o.color37 = "#eebb99", o.color38 = "#eedd88", o.color39 = "#bbdd88", o.color3A = "#99dd99", o.color3B = "#99ddbb", o.color3C = "#99ddee", o.color3D = "#aaaaaa", o.color3E = "#080808", o.color3F = "#080808", o))(x || {});
var Ke = Object.keys(x).sort();
var p = (e) => e.startsWith("#") ? e : x[e];
var qe = (e) => (0, import_jsx_runtime2.jsx)("span", { id: e.id, className: `nes-ui-badge ${e.className || ""}`, style: { ...e.style, backgroundColor: e.backgroundColor ? p(e.backgroundColor) : "inherit" }, children: (0, import_jsx_runtime2.jsx)("span", { className: `nes-ui-is-${e.backgroundColor}`, style: { color: e.color }, children: e.text }) });
var _e = (e = { backgroundColorLeft: "black", backgroundColor: "success", textLeft: "left", text: "right" }) => (0, import_jsx_runtime2.jsxs)("span", { id: e.id, className: `nes-ui-badge nes-ui-is-split ${e.className || ""}`, style: e.style, children: [(0, import_jsx_runtime2.jsx)("span", { className: `nes-ui-is-${e.backgroundColorLeft || "dark"}`, style: { color: e.colorLeft || "#fff" }, children: e.textLeft }), (0, import_jsx_runtime2.jsx)("span", { className: `nes-ui-is-${e.backgroundColor}`, style: { color: e.color || "#000" }, children: e.text })] });
var Je = ({ id: e, style: t, children: r, className: n, shadow: s, backgroundColor: l }) => (0, import_jsx_runtime3.jsx)("p", { id: e, style: { ...t, backgroundColor: l || "" }, className: `nes-ui-block-text ${s && "nes-ui-is-shadow"} ${n || ""}`, children: r });
var f = (e) => {
  let t = (0, import_react2.useCallback)((r) => {
    e.onChange && e.onChange(r.target.checked, r);
  }, [e.onChange]);
  return (0, import_jsx_runtime4.jsxs)("label", { className: `nes-ui-is-${e.type}`, children: [(0, import_jsx_runtime4.jsx)("input", { id: e.id, type: e.type, className: `nes-ui-${e.type} ${e.disabled ? "nes-ui-is-disabled" : ""} ${e.className ? e.className : ""}`, disabled: e.disabled, name: e.name, style: e.style, value: e.value, checked: !!e.checked, onChange: e.disabled ? () => {
  } : t }), (0, import_jsx_runtime4.jsx)("span", { children: e.label })] });
};
var _ = (e, t) => {
  if (t) return t;
  switch (e) {
    case "small":
      return "2em";
    case "medium":
      return "4em";
    case "large":
      return "8em";
    default:
      return "0.5em";
  }
};
var b = ({ height: e, size: t, style: r, id: n }) => (0, import_jsx_runtime5.jsx)("div", { id: n, style: { ...r, height: _(t || "small", e) } });
var G = ["fontColor", "borderInverted", "size", "color", "isIconButton"];
var k = (e) => {
  var _a;
  return (0, import_jsx_runtime6.jsx)("div", { style: e.style, className: `${e.isIconButton ? "nes-ui-icon-button-wrapper" : "nes-ui-button-wrapper"} ${e.borderInverted ? "nes-ui-border-inverted" : ""} ${e.className ? e.className : ""}`, children: (0, import_jsx_runtime6.jsx)("button", { style: { color: p(e.fontColor || ((_a = e.style) == null ? void 0 : _a.color) || "inherit") }, ...m(e, ...G, "style"), className: `${e.isIconButton ? "nes-ui-icon-btn" : "nes-ui-btn"} nes-ui-btn-${e.color || "normal"} nes-ui-is-size-${e.size || "medium"} ${e.disabled && "nes-ui-btn-disabled"}`, onClick: e.disabled ? () => {
  } : e.onClick, children: e.children }) });
};
var mo = (e) => (0, import_jsx_runtime7.jsx)(f, { ...e, type: "checkbox" });
var fo = ({ children: e, style: t, type: r, className: n, id: s }) => (0, import_jsx_runtime8.jsx)("div", { id: s, className: `nes-ui-col-${r} ${n || ""}`, style: t, children: e });
var X = { marginLeft: "auto", marginRight: "auto" };
var Z = { marginLeft: "auto", marginRight: 0 };
var bo = ({ id: e, title: t, children: r, style: n, roundedCorners: s, align: l, alignTitle: i, className: a }) => (0, import_jsx_runtime9.jsxs)("section", { id: e, className: `nes-ui-container ${t ? "nes-ui-with-title" : ""} ${s ? "nes-ui-is-rounded" : ""}  ${l ? "nes-ui-is-" + l : ""} ${a || ""}`, style: n, children: [t && (0, import_jsx_runtime9.jsx)("h3", { className: "nes-ui-title", style: { ...n, ...i === "center" ? X : i === "right" ? Z : {} }, children: t }), r] });
var go = ({ id: e, style: t, className: r, children: n }) => (0, import_jsx_runtime10.jsx)("footer", { id: e, className: `nes-ui-footer ${r || ""}`, style: t, children: n });
var So = ({ id: e, style: t, className: r, children: n }) => (0, import_jsx_runtime11.jsx)("header", { id: e, className: `nes-ui-header ${r || ""}`, style: t, children: n });
var B = ({ id: e, children: t, style: r, color: n, size: s, className: l, centered: i, heading: a }) => (0, import_jsx_runtime12.jsx)("p", { id: e, className: `nes-ui-text nes-ui-is-${a ? "" : "disabled"} nes-ui-is-${a ? "heading-" : ""} nes-ui-is-${s || "medium"} ${l || ""}`, style: { ...r, textAlign: i ? "center" : "left", color: n || "inherit" }, children: t });
var Lo = ({ id: e, children: t, style: r, color: n, size: s, centered: l, topSpacing: i, bottomSpacing: a, dense: c, className: z }) => (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [(typeof i > "u" || i) && !c && (0, import_jsx_runtime13.jsx)(b, { size: "small" }), (0, import_jsx_runtime13.jsx)(B, { id: e, style: { ...r, paddingBottom: "0.5em", marginBottom: c ? "0" : "inherit", paddingTop: "0.5em", textDecoration: s === "xlarge" ? "underline" : "none", display: "block" }, centered: l, color: n, className: z, size: s || "small", heading: true, children: t || "" }), (typeof a > "u" || a) && !c && (0, import_jsx_runtime13.jsx)(b, { size: "small" })] });
var Ao = ({ id: e, style: t, children: r, className: n, variant: s }) => (0, import_jsx_runtime14.jsx)("div", { id: e, className: `nes-ui-hero-${s || "dash"} ${n || ""}`, style: t, children: r });
var Ro = ({ id: e, style: t, height: r, color: n, className: s }) => (0, import_jsx_runtime15.jsx)("hr", { className: `nes-ui-hr ${s || ""} nes-ui-is-${n || ""}`, id: e, style: { ...t, height: r } });
var Oo = (e) => (0, import_jsx_runtime16.jsx)(k, { ...e, isIconButton: true, children: e.children });
var M = (e) => {
  let [t, r] = (0, import_react3.useState)(e.value || ""), n = (s) => {
    r(s.target.value), e.onChange && e.onChange(s.target.value, s);
  };
  return (0, import_react3.useEffect)(() => {
    r(e.value || "");
  }, [e.value]), (0, import_jsx_runtime17.jsxs)("div", { className: "nes-ui-field", children: [(0, import_jsx_runtime17.jsx)("label", { htmlFor: e.name, children: e.label }), (0, import_jsx_runtime17.jsx)("input", { id: e.id, autoComplete: e.autoComplete, type: e.type, className: `nes-ui-input ${e.disabled ? "nes-ui-is-disabled" : ""} ${e.color ? "nes-ui-is-" + e.color : "nes-ui-is-none"} ${e.className || ""}`, disabled: e.disabled, name: e.name, style: e.style, value: t, onKeyUp: e.disabled ? () => {
  } : e.onKeyUp, onChange: e.disabled ? () => {
  } : n })] });
};
var Qo = ({ ...e }) => (0, import_jsx_runtime18.jsx)(M, { ...e });
var jo = ({ id: e, style: t, children: r, styleType: n, size: s }) => (0, import_jsx_runtime19.jsx)("div", { className: "nes-ui-lists", children: (0, import_jsx_runtime19.jsx)("ul", { id: e, className: `nes-ui-list nes-ui-is-${s || "medium"} nes-ui-is-${n || "disc"}`, style: t, children: r }) });
var tt = ({ id: e, children: t, style: r, className: n, open: s, modal: l, onClose: i }) => (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [(0, import_jsx_runtime20.jsx)("menu", { id: e, className: `nes-ui-menu ${n || ""} ${l && "nes-ui-is-modal"}`, style: { ...r, display: s === false ? "none" : "flex" }, children: t }), l && (0, import_jsx_runtime20.jsx)("div", { className: "nes-ui-modal-backdrop", style: { ...r, background: "transparent", display: s === false ? "none" : "block" }, onClick: i || (() => {
}) })] });
var st = ({ id: e, open: t, backdrop: r, children: n, style: s, className: l, onClose: i, backdropClose: a }) => (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [(0, import_jsx_runtime21.jsx)("dialog", { id: e, className: `nes-ui-modal nes-ui-is-rounded ${l || ""}`, style: { ...s, display: t ? "block" : "none" }, children: n }), r !== false && (0, import_jsx_runtime21.jsx)("div", { className: "nes-ui-modal-backdrop", style: { ...s, display: t ? "block" : "none" }, onClick: a !== false && i ? i : () => {
} })] });
var lt = ({ id: e, children: t, style: r, className: n }) => (0, import_jsx_runtime21.jsx)(import_jsx_runtime21.Fragment, { children: (0, import_jsx_runtime21.jsx)("div", { id: e, className: `nes-ui-modal-content ${n || ""}`, style: r, children: t }) });
var pt = (e) => {
  let [t, r] = import_react5.default.useState(e.inverted), [n, s] = import_react5.default.useState(false);
  return (0, import_react4.useEffect)(() => {
    S(s);
  }, []), (0, import_react4.useEffect)(() => {
    e.inverted ? r(true) : typeof e.inverted > "u" ? r(n) : r(false);
  }, [e.inverted, n]), (0, import_jsx_runtime22.jsx)("span", { id: e.id, className: `nes-ui-pixelicon nes-ui-is-size-${e.size || "medium"}`, children: (0, import_jsx_runtime22.jsx)("span", { className: `${e.name} ${t ? "nes-ui-is-inverted" : ""}`, style: e.style }) });
};
var Pt = ({ id: e, value: t, max: r, style: n, color: s }) => (0, import_jsx_runtime23.jsx)("progress", { id: e, className: `nes-ui-progress ${s && "nes-ui-is-" + s}`, style: n, value: t, max: r });
var gt = (e) => (0, import_jsx_runtime24.jsx)(f, { ...e, type: "radio" });
var St = ({ id: e, children: t, style: r, className: n }) => (0, import_jsx_runtime25.jsx)("div", { id: e, className: `nes-ui-row ${n || ""}`, style: r, children: t });
var Ie = (e, t) => t ? e || [] : e || "";
var Tt = (e) => {
  let [t, r] = (0, import_react6.useState)(Ie(e.value, e.multiple || false)), n = (0, import_react6.useCallback)((s) => {
    e.multiple ? r([s.target.value]) : r(s.target.value), typeof e.onChange == "function" && e.onChange(s);
  }, [e.multiple]);
  return (0, import_react6.useEffect)(() => {
    r(e.value);
  }, [e.value, e.multiple]), (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [(0, import_jsx_runtime26.jsx)("label", { htmlFor: e.id || e.htmlFor, children: e.label }), (0, import_jsx_runtime26.jsx)("div", { className: `nes-ui-select ${e.multiple ? "nes-ui-is-multiple" : ""} ${e.color ? "nes-ui-is-" + e.color : "nes-ui-is-none"} ${e.className || ""}`, children: (0, import_jsx_runtime26.jsx)("select", { value: t, onChange: e.disabled ? () => {
  } : n, disabled: e.disabled, className: `${e.disabled ? "nes-ui-is-disabled" : ""}`, multiple: e.multiple, required: e.required, id: e.id || e.htmlFor, children: e.children }) })] });
};
var Lt = ({ id: e, style: t, className: r, horizontal: n }) => (0, import_jsx_runtime27.jsx)("div", { id: e, className: `nes-ui-separator ${r || ""} ${n && "nes-ui-is-horizontal"}`, style: t });
var At = ({ id: e, style: t, className: r }) => (0, import_jsx_runtime28.jsx)("div", { id: e, className: `nes-ui-spacer ${r || ""}`, style: t });
var Rt = ({ id: e, style: t, children: r, tableStyle: n, bordered: s, centered: l, className: i }) => (0, import_jsx_runtime29.jsx)("div", { className: `nes-ui-table-responsive ${i || ""}`, style: t, children: (0, import_jsx_runtime29.jsx)("table", { id: e, style: n, className: `nes-ui-table ${s && "nes-ui-is-bordered"} ${l && "nes-ui-is-centered"}`, children: r }) });
var Kt = (e) => {
  let [t, r] = (0, import_react7.useState)(e.value || ""), n = (s) => {
    r(s.target.value), e.onChange && e.onChange(s.target.value, s);
  };
  return (0, import_react7.useEffect)(() => {
    r(e.value || "");
  }, [e.value]), (0, import_jsx_runtime30.jsxs)("div", { className: "nes-ui-field", children: [(0, import_jsx_runtime30.jsx)("label", { htmlFor: e.name, children: e.label }), (0, import_jsx_runtime30.jsx)("textarea", { id: e.id, cols: e.cols, rows: e.rows, className: `nes-ui-textarea ${e.disabled ? "nes-ui-is-disabled" : ""} ${e.color ? "nes-ui-is-" + e.color : "nes-ui-is-none"} ${e.className || ""}`, disabled: e.disabled, name: e.name, style: e.style, value: t, onChange: e.disabled ? () => {
  } : n })] });
};
var qt = "bubblePostion";
var _t = (e) => (0, import_jsx_runtime31.jsx)("button", { ...m(e, "bubblePostion"), className: `nes-ui-toast nes-ui-from-${e.bubblePostion || "left"} ${e.onClick ? "nes-ui-clickable" : ""} ${e.className ? e.className : ""}`, children: e.children });
var Jt = ({ id: e, children: t, style: r, className: n, borderless: s, roundedCorners: l }) => (0, import_jsx_runtime32.jsx)("div", { className: `nes-ui-toolbar-wrapper ${l === false ? "" : "nes-ui-has-rounded-corners"}`, children: (0, import_jsx_runtime32.jsx)("div", { id: e, className: `nes-ui-toolbar ${n || ""} ${s ? "nes-ui-is-borderless" : ""}`, style: r, children: t }) });
var Zt = (e) => {
  let { id: t, style: r, children: n, className: s, doubleSize: l, doubleRoundCorners: i } = e;
  return (0, import_jsx_runtime33.jsx)("div", { id: t, className: `nes-ui-pixel-border${l ? "-2x" : ""}${i ? "-2" : ""} ${s || ""}`, style: r, children: n });
};
typeof document < "u" && (document.documentElement.classList.toggle("nes-ui", true), v(I()));
export {
  we as A,
  W as ACustomProps,
  qe as Badge,
  _e as BadgeSplitted,
  Je as BlockText,
  f as BooleanField,
  b as Br,
  k as Button,
  mo as Checkbox,
  fo as Col,
  Ke as ColorPaletteNames,
  x as Colors,
  bo as Container,
  d as DARK_MODE_KEY,
  go as Footer,
  So as Header,
  Lo as Heading,
  Ao as Hero,
  Ro as Hr,
  Oo as IconButton,
  Qo as Input,
  jo as List,
  tt as Menu,
  st as Modal,
  lt as ModalContent,
  Zt as PixelBorder,
  pt as PixelIcon,
  Pt as Progress,
  gt as Radio,
  St as Row,
  Tt as Select,
  Lt as Separator,
  At as Spacer,
  Rt as Table,
  B as Text,
  Kt as TextArea,
  M as TextField,
  _t as Toast,
  qt as ToastCustomProps,
  Jt as Toolbar,
  p as getColorAsHexOrByName,
  Ae as isDarkModeActive,
  S as onDarkModeChange,
  I as rememberDarkModeUserSetting,
  v as setDarkModeActivation
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=nes-ui-react.js.map
