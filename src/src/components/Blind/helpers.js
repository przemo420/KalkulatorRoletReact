export function parseUpdateEventToParent( $this, props ) {
    setTimeout(function(){
        $this.props.onUpdate( props ); 
    }, 100 );
}

export function cloneStateValue( value ) {
    //return JSON.parse( JSON.stringify( value ) );
    return value.slice(0);
}