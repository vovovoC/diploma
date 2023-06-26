// @ts-nocheck
import React from 'react'
import './index.scss';

function Star(props) {
  const {className='',active=false,style={}} = props
  if (!active) {
    return (
      <span className={className} style={{...style,
        textShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
      }}>{'\u2606'}</span>
    )
  }
  return (
    <span className={className} style={{...style,
      color:'gold',
      textShadow:'0 0 0.75rem gold',
    }}>{'\u2605'}</span>
  )
}

const BTN_UNSTYLE = {
  padding: '.25rem',
  background: 'none',
  border: 'none',
  outline: 'none',
}

const NOWRAP = {
  whiteSpace: 'nowrap',
  wordBreak: 'keep-all',
}

function StarButton(props) {
  const {className='',active=false,disabled=false,style={},onClick,onMouseEnter,onMouseLeave,...rest} = props
  
  function handleMouseEnter() {
    if (!disabled&&onMouseEnter) onMouseEnter()
  }
  
  function handleMouseLeave() {
    if (!disabled&&onMouseLeave) onMouseLeave()
  }
  
  return (
    <button style={BTN_UNSTYLE} className={className} disabled={disabled} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...rest}>
      <Star active={active} style={style} />
    </button>
  )
}

export function Rating(props) {
  const {initialValue=0,max=5,className='',disabled=false,onChange} = props
  
  const [value,setValue] = React.useState(initialValue)
  
  function handleClick(e) {
    e.preventDefault()
    if (onChange) onChange(value)
  }
  
  return (
    <div className={className} style={NOWRAP}>
      {[...Array(max).keys()].map(i=>{
        
        function handleMouseEnter() {
          if (!disabled) setValue(i+1)
        }

        function handleMouseLeave() {
          if (!disabled) setValue(initialValue)
        }
        
        return (
          <StarButton key={i} active={i<value} disabled={disabled} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-tootik={disabled?'':`Rate ${i+1} \u2b50`} />
        )
      })}
    </div>
  )
}
function randInt(n=10) {
  return Math.floor(Math.random()*n)
}

function randColor() {
  return `#${[...Array(3).keys()].map(e=>(randInt(238)+17).toString(16)).join('')}`
}