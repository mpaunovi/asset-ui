import React from 'react';
import CreateAsset from './CreateAsset';
import GetAllAsset from './GetAllAssets';

function CenterAndAlignComponent() {
    return (
        <div className="container">
            <CreateAsset />
            <GetAllAsset />
        </div>
    );
}

export default CenterAndAlignComponent;
