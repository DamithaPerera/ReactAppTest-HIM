import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TextField, Grid, Typography, Card, CardContent} from '@material-ui/core';
import {setFilterText} from './propertySlice';

function PropertyList() {
    const dispatch = useDispatch();
    const {filteredList, filterText} = useSelector((state) => state.properties);
    const [expandedProperty, setExpandedProperty] = React.useState(null);
    const handleSeeMore = (id) => {
        setExpandedProperty((prevExpandedProperty) => (prevExpandedProperty === id ? null : id));
    };
    const handleFilterChange = (event) => {
        dispatch(setFilterText(event.target.value));
        setExpandedProperty(null);
    };

    return (
        <React.Fragment>
            <TextField
                fullWidth
                variant="outlined"
                label="Filter properties"
                value={filterText}
                onChange={handleFilterChange}
                style={{marginBottom: '20px'}}
            />
            {filteredList.length === 0 ? (
                <Typography variant="h6">No properties found</Typography>
            ) : (
                <Grid container spacing={3}>
                    {filteredList.map((property) => (
                        <Grid item xs={12} sm={6} md={4} key={property.id}>
                            <Card style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                                <CardContent style={{flexGrow: 1}}>
                                    <Typography variant="h5" component="h2">
                                        {property.name}
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        {property.code}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {expandedProperty === property.id ? (
                                            <React.Fragment>
                                                {property.description}
                                                <span style={{color: 'blue', cursor: 'pointer'}}
                                                      onClick={() => handleSeeMore(property.id)}>see less</span>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                {property.description.substring(0, 165)}
                                                {property.description.length > 165 && '...'}
                                                {property.description.length > 165 && (
                                                    <span style={{color: 'blue', cursor: 'pointer'}}
                                                          onClick={() => handleSeeMore(property.id)}>see more</span>
                                                )}
                                            </React.Fragment>
                                        )}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </React.Fragment>
    );
}

export default PropertyList;