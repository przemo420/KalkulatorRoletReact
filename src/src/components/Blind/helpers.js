export function parseUpdateEventToParent( $this, props ) {
    setTimeout(function(){
        $this.props.onUpdate( props ); 
    }, 100 );
}