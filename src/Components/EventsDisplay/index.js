import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    eventsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50
    },
    tableContainer: {
        maxWidth: 1200,
    },
    table: {
        minWidth: 650,
        maxWidth: 1200,
        backgroundColor: '#fffeea',
    },
});


export default function EventsDisplay() {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [triggerGetData, setTriggerGetData] = useState(0);

  useEffect(() => {
    
    const getData = async () => {
        const dataResponse = await fetch('http://localhost:3001/event_posts/', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const dataJSON = await dataResponse.json();
        setRows(dataJSON)
        //console.log(dataJSON);
    }

    getData();
  }, [triggerGetData])

  const deleteEntry = async (id) => {
    console.log(id)

    await fetch('http://localhost:3001/event_posts/'+id, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    setTriggerGetData(!triggerGetData)
  }

  return (
      <div className={classes.eventsContainer}>
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell style={{fontWeight: 800, fontSize: 17}}>Event Name</TableCell>
                    <TableCell align="right" style={{fontWeight: 800, fontSize: 17}}>Type</TableCell>
                    <TableCell align="right" style={{fontWeight: 800, fontSize: 17}}>Location</TableCell>
                    <TableCell align="right" style={{fontWeight: 800, fontSize: 17}}>Date</TableCell>
                    <TableCell align="right" style={{fontWeight: 800, fontSize: 17}}>Time</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id} onClick={e => deleteEntry(row.id)} hover={true} style={{cursor: 'pointer'}}>
                        <TableCell component="th" scope="row">
                            {row.eventName}
                        </TableCell>
                        <TableCell align="right">{row.type}</TableCell>
                        <TableCell align="right">{row.location}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
    
  );
}
