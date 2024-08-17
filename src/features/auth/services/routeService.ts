import {
  CommonActions,
  createNavigationContainerRef,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

const navigate = (name: string, params?: object) => {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.navigate({name, params}));
  }
};

const openDrawer = () => {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current.dispatch(DrawerActions.openDrawer());
  }
};

const closeDrawer = () => {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current.dispatch(DrawerActions.closeDrawer());
  }
};

const goBack = () => {
  if (navigationRef.isReady() && navigationRef.current?.canGoBack()) {
    navigationRef.current.dispatch(CommonActions.goBack());
  }
};

const pop = (screenCount?: number) => {
  if (navigationRef.isReady() && navigationRef.current?.canGoBack()) {
    navigationRef.current.dispatch(StackActions.pop(screenCount));
  }
};

const popToTop = () => {
  if (navigationRef.isReady() && navigationRef.current?.canGoBack()) {
    navigationRef.current.dispatch(StackActions.popToTop());
  }
};

const push = (name: string, params?: object) => {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.push(name, params));
  }
};

const replace = (name: string, params?: object) => {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.replace(name, params));
  }
};

const reset = (name: string, params?: object) => {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name, params}],
      }),
    );
  }
};

const setParamsByRouteKey = (
  routeKey?: string,
  params: Record<string, unknown> = {},
) => {
  if (navigationRef.isReady() && routeKey) {
    navigationRef.current?.dispatch({
      ...CommonActions.setParams(params),
      source: routeKey,
    });
  }
};

export const RouteService = {
  navigationRef,
  navigate,
  setParamsByRouteKey,
  openDrawer,
  closeDrawer,
  goBack,
  pop,
  popToTop,
  push,
  reset,
  replace,
};
