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
        flag: false
    }
    handleChange = (event) => {
        this.setState({
            flag: !this.state.flag
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
                                    <Grid item>
                                        <LineGraph labels={this.state.data.labels} data={this.state.data.datasets[0].data} />
                                    </Grid>
                                    <Grid item>
                                        <DoughnutChart
                                            data={this.state.data.datasets[0].data}
                                            title={this.state.data.labels}
                                            colors={['#3e517a', '#b08ea2', '#BBB6DF']}
                                        />
                                    </Grid>
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