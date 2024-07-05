import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Grid, Typography, Card, CardContent } from '@material-ui/core';
import { setFilterText } from './propertySlice';

function PropertyList() {
    const dispatch = useDispatch();
    const { filteredList, filterText } = useSelector((state) => state.properties);

    const handleFilterChange = (event) => {
        dispatch(setFilterText(event.target.value));
    };

    return (
        <>
            <TextField
                fullWidth
                variant="outlined"
                label="Filter properties"
                value={filterText}
                onChange={handleFilterChange}
                style={{ marginBottom: '20px' }}
            />
            {filteredList.length === 0 ? (
                <Typography variant="h6">No properties found</Typography>
            ) : (
                <Grid container spacing={3}>
                    {filteredList.map((property) => (
                        <Grid item xs={12} sm={6} md={4} key={property.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {property.name}
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        {property.code}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {property.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
}

export default PropertyList;