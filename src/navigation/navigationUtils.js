import { createNavigationContainerRef, StackActions } from '@react-navigation/native';

export const rootNavigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (rootNavigationRef.isReady()) {
    rootNavigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (rootNavigationRef.isReady()) {
    rootNavigationRef.goBack();
  }
}

export function push(...args) {
  if (rootNavigationRef.isReady()) {
    rootNavigationRef.dispatch(StackActions.push(...args));
  }
}

export function replace(...args) {
  if (rootNavigationRef.isReady()) {
    rootNavigationRef.dispatch(StackActions.replace(...args));
  }
}
