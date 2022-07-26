import React from "react";

function LoadingListOrders(Component) {
    return function LoadingListOrders({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />

        return(
            <p>Estamos cargando la información</p>
        );
    };
}
export default LoadingListOrders;