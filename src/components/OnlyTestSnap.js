import React, { Component } from 'react'
export const OnlyTestSnap = (props) => {
  // console.log('props', props)
  const { items = [] } = props
  // console.log(items)
  if (!items.length){

    return (
     	<div>
     	 <p>No Items Found</p>
     	</div>
    )
  }

  if (items.length){
    return (
      <div>
        {items.map((value) =>
          (<p key={value}>
        	Items Found {value}
          </p>)
        )}

      </div>
    )
  }

}
