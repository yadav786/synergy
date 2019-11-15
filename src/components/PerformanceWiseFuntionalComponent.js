import React, { Suspense } from 'react'
import LoadingFuncComponent from './LoadingFuncComponent'
const PerformanceLazyComponent = React.lazy(() => import('./PerformanceLazyComponent'))

// console.log('PerformanceLazyComponent',PerformanceLazyComponent);

export default function PerformanceWiseFuntionalComponent(){

  return (
    <>
      <Suspense fallback={<LoadingFuncComponent/>}>
        <PerformanceLazyComponent />
      </Suspense>
    </>
	      )

}
