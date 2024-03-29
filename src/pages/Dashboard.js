import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import LineGraph from '../utils/MyChart';
import DoughnutChart from '../utils/DoughnutChart';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

export default class Dashboard extends React.Component {
    state = {
        data: {
          labels: ["rdsBilled", "rdsOnBoarded", "rdsLMTD"],
          datasets: [
            {
                label: "Sales",
                data: [7, 4, 13],
            }
        ]
        },
        flag: false,
        chartType: 'Line'
    }
    handleChange = (event) => {
        this.setState({
            flag: !this.state.flag
        })
    }
    handleSelectChange = event => {
        this.setState({
            chartType: ''+event.target.value
        })
      }
    render(){
        return(
            <div>
                <Container maxWidth="lg">
                    <Grid component="label" container alignItems="center" spacing={1}>
                        <Grid item>Off</Grid>
                        <Grid item>
                            <Switch onChange={this.handleChange} />
                        </Grid>
                        <Grid item>On</Grid>
                    </Grid>
                    <Card>
                        <CardContent>
                            { this.state.flag ?
                                (<Grid component="label" container alignItems="center" spacing={3}>
                                    <Grid item xs={12}>
                                        <FormControl style={{minWidth: 100}}>
                                            <InputLabel htmlFor="type-simple">Chart Type</InputLabel>
                                            <Select 
                                            value={this.state.chartType}
                                            onChange={this.handleSelectChange}
                                            inputProps={{
                                                name: 'Type',
                                                id: 'type-simple',
                                            }}
                                            >
                                            <MenuItem value="Line">Line</MenuItem>
                                            <MenuItem value="Pie">Pie</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    
                                    { this.state.chartType === 'Line' ?
                                    (<Grid item>
                                        <LineGraph labels={this.state.data.labels} data={this.state.data.datasets[0].data} />
                                    </Grid>) :
                                    (<Grid item xs={12}>
                                        <DoughnutChart
                                            data={this.state.data.datasets[0].data}
                                            title={this.state.data.labels}
                                            colors={['#3e517a', '#b08ea2', '#BBB6DF']}
                                        />
                                    </Grid>)}
                                </Grid>)
                                : 
                                (<Grid component="label" container alignItems="center" spacing={3} style={{backgroundColor: '#ccc'}}> 
                                
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                            {this.state.data.labels.map(d =>
                                                <TableCell key={d}>{d}</TableCell>
                                            )}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                            {this.state.data.datasets[0].data.map(d =>
                                                <TableCell key={d}>{d}</TableCell>
                                            )}
                                        </TableRow>
                                        </TableBody>
                                    </Table>
                                 </Grid>)
                            }
                        </CardContent>
                    </Card>
                </Container>
            </div>
        )
    }
}