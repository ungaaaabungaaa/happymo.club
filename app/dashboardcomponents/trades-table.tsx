'use client'
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"




export default function TradesCard() {


  const trades = [
    {
      id: '1',
      pair: 'LTCUSDT',
      type: 'Long',
      leverage: '10.00x',
      amount: '2.0 LTC',
      entryPrice: 122.77,
      exitPrice: 124.95,
      margin: '23.24 USDT',
      pnl: '+4.0353 USDT',
      pnlPercentage: '+17.36%',
      fee: '0.32479161 USDT',
      tpsl: 'TP/SL',
      openTime: '2024-12-10 00:49:29',
      closeTime: '2024-12-12 22:17:25',
      status: '4',
    },
    {
      id: '2',
      pair: 'LTCUSDT',
      type: 'Long',
      leverage: '10.00x',
      amount: '5.0 LTC',
      entryPrice: 122.77,
      exitPrice: 124.95,
      margin: '59.87 USDT',
      pnl: '+9.8773 USDT',
      pnlPercentage: '+16.49%',
      fee: '1.02288154 USDT',
      tpsl: 'TP/SL',
      openTime: '2024-12-10 00:28:20',
      closeTime: '2024-12-12 22:17:25',
      status: '4',
    },

    {
      id: '3',
      pair: 'LTCUSDT',
      type: 'Long',
      leverage: '10.00x',
      amount: '2.0 LTC',
      entryPrice: 122.77,
      exitPrice: 124.95,
      margin: '23.24 USDT',
      pnl: '+4.0353 USDT',
      pnlPercentage: '+17.36%',
      fee: '0.32479161 USDT',
      tpsl: 'TP/SL',
      openTime: '2024-12-10 00:49:29',
      closeTime: '2024-12-12 22:17:25',
      status: '4',
    },
    {
      id: '4',
      pair: 'LTCUSDT',
      type: 'Long',
      leverage: '10.00x',
      amount: '5.0 LTC',
      entryPrice: 122.77,
      exitPrice: 124.95,
      margin: '59.87 USDT',
      pnl: '+9.8773 USDT',
      pnlPercentage: '+16.49%',
      fee: '1.02288154 USDT',
      tpsl: 'TP/SL',
      openTime: '2024-12-10 00:28:20',
      closeTime: '2024-12-12 22:17:25',
      status: '4',
    },

    {
      id: '5',
      pair: 'LTCUSDT',
      type: 'Long',
      leverage: '10.00x',
      amount: '2.0 LTC',
      entryPrice: 122.77,
      exitPrice: 124.95,
      margin: '23.24 USDT',
      pnl: '+4.0353 USDT',
      pnlPercentage: '+17.36%',
      fee: '0.32479161 USDT',
      tpsl: 'TP/SL',
      openTime: '2024-12-10 00:49:29',
      closeTime: '2024-12-12 22:17:25',
      status: '4',
    },
    {
      id: '6',
      pair: 'LTCUSDT',
      type: 'Long',
      leverage: '10.00x',
      amount: '5.0 LTC',
      entryPrice: 122.77,
      exitPrice: 124.95,
      margin: '59.87 USDT',
      pnl: '+9.8773 USDT',
      pnlPercentage: '+16.49%',
      fee: '1.02288154 USDT',
      tpsl: 'TP/SL',
      openTime: '2024-12-10 00:28:20',
      closeTime: '2024-12-12 22:17:25',
      status: '4',
    },

    {
      id: '7',
      pair: 'LTCUSDT',
      type: 'Long',
      leverage: '10.00x',
      amount: '2.0 LTC',
      entryPrice: 122.77,
      exitPrice: 124.95,
      margin: '23.24 USDT',
      pnl: '+4.0353 USDT',
      pnlPercentage: '+17.36%',
      fee: '0.32479161 USDT',
      tpsl: 'TP/SL',
      openTime: '2024-12-10 00:49:29',
      closeTime: '2024-12-12 22:17:25',
      status: '4',
    },
    {
      id: '8',
      pair: 'LTCUSDT',
      type: 'Long',
      leverage: '10.00x',
      amount: '5.0 LTC',
      entryPrice: 122.77,
      exitPrice: 124.95,
      margin: '59.87 USDT',
      pnl: '+9.8773 USDT',
      pnlPercentage: '+16.49%',
      fee: '1.02288154 USDT',
      tpsl: 'TP/SL',
      openTime: '2024-12-10 00:28:20',
      closeTime: '2024-12-12 22:17:25',
      status: '4',
    },

    





    // ... Add the rest of the trade data here
  ]


  return (
    <div className="h-full w-full"> {/* Changed this line */}
      <Card className="bg-black text-white rounded-2xl overflow-hidden h-full"> 
        <CardHeader className="pb-2">
          <h2 className="text-2xl font-semibold">Trades</h2>
          <p className="text-sm text-gray-400">
            Trader-Initiated Trades
          </p>
        </CardHeader>
        
        {/* <CardContent className="flex flex-col align-middle justify-center h-[calc(100%-4rem)] overflow-auto"> 


             <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">Pair</TableHead>
                  <TableHead className="text-white">Type</TableHead>
                  <TableHead className="text-white">Amount</TableHead>
                  <TableHead className="text-white">Entry</TableHead>
                  <TableHead className="text-white">Exit</TableHead>
                  <TableHead className="text-white">PNL</TableHead>
      
                </TableRow>
              </TableHeader>
              <TableBody>
                {trades.map((trade) => (
                  <TableRow key={trade.id}>
                    <TableCell className="font-medium">{trade.pair}</TableCell>
                    <TableCell>{trade.type}</TableCell>
                    <TableCell>{trade.amount}</TableCell>
                    <TableCell>{trade.entryPrice}</TableCell>
                    <TableCell>{trade.exitPrice}</TableCell>
                    <TableCell className={trade.pnl.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                      {trade.pnl}
                      <span className="block text-xs">({trade.pnlPercentage})</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
  
          
        </CardContent> */}

        <CardContent className="flex flex-col align-middle justify-center h-[calc(100%-4rem)] overflow-auto"> 
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Pair</TableHead>
                <TableHead className="text-white">Type</TableHead>
                <TableHead className="text-white">Amount</TableHead>
                <TableHead className="text-white">Entry</TableHead>
                <TableHead className="text-white">Exit</TableHead>
                <TableHead className="text-white">PNL</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trades.map((trade) => (
                <TableRow key={trade.id}>
                  <TableCell className="font-medium">{trade.pair}</TableCell>
                  <TableCell>{trade.type}</TableCell>
                  <TableCell>{trade.amount}</TableCell>
                  <TableCell>{trade.entryPrice}</TableCell>
                  <TableCell>{trade.exitPrice}</TableCell>
                  <TableCell className={trade.pnl.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                    {trade.pnl}
                    <span className="block text-xs">({trade.pnlPercentage})</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>




      </Card>
    </div>
  )
}
