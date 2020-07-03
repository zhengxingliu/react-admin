import React, { Component, createRef } from 'react'
import { Card, Row, Col, Progress, Statistic, Divider, Typography } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import echarts from 'echarts'

import { getSiteVisitStatistics }  from '../../requests'
import './Dashboard.less'

const gridSpan = {
  xs: 24,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6
}

export default class Dashboard extends Component {
  constructor() {
    super()
    this.VisitsChartRef = createRef()
    this.state = {
      hasError : false
    }
  }
  
  getVisitsGraphData = () => {
    const months  = []
    const visits = []
    getSiteVisitStatistics()
      .then(res => {
        res.data.amount.forEach(item => {
          months.push(item.month)
          visits.push(item.visits)
        })
        const option = {
          color: ['#1a90ff'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {           
                type: 'shadow'        
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {   
              type: 'category',
              data: months,
              axisTick: {
                  alignWithLabel: true,
                  show: false
              },
              axisLine: { 
                lineStyle: {
                  color: '#999'
                }
              },
              axisLabel: {
                textStyle: {
                    color: '#999'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLine: { 
                lineStyle: {
                  color: '#999'
                }
              },
              axisLabel: {
                textStyle: {
                    color: '#999'
                }
              },
              axisTick: {
                show: false
              }
            }
          ],
          series: [
            {
              name: 'visits',
              type: 'bar',
              areaStyle: {},
              barWidth: '60%',
              data: visits
            }
          ],
          dataZoom: [
            {
              type: 'inside',
            }
        ],
      }
      this.siteVisitsChart.setOption(option)
      })
      .catch(err => {
        console.log(err)
        this.setState({hasError: true})
      })
  }
  
  initSiteVisitsChart = () => {  
    this.siteVisitsChart = echarts.init(this.VisitsChartRef.current)
  }

  resizeChart = () => {
    setTimeout(() => {
      this.siteVisitsChart.resize()
    }, 800);
  }
  
  
  componentDidMount() {
    this.initSiteVisitsChart()
    this.getVisitsGraphData()
    window.addEventListener('resize', this.resizeChart);
    window.addEventListener('fullscreenchange', this.resizeChart.bind(this))
  }


  render() {
    return (
      <>
        <Card
          title='Overview'
          bordered={false}
          bodyStyle={{backgroundColor: '#eff2f5'}}
        >
          
          <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" {...gridSpan}>
              <Card hoverable className='gutter-box' >
                <Progress type="dashboard"  percent={75} />   
                <Typography style={{lineHeight: '30px'}}>Operation Rate</Typography> 
              </Card>
            </Col>


            <Col className="gutter-row" {...gridSpan}>
              <Card hoverable className='gutter-box' bodyStyle={{padding: '12px'}}>
                    <Statistic
                      title="Active"
                      value={11.28}
                      precision={2}
                      valueStyle={{ color: '#3f8600', }}
                      prefix={<ArrowUpOutlined />}
          
                      suffix="%"
                    />
                    <Divider></Divider>
                    <Statistic
                      title="Idle"
                      value={9.3}
                      precision={2}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<ArrowDownOutlined />}
                      suffix="%"
                    />
                </Card>
        
            </Col>


            <Col className="gutter-row" {...gridSpan}>
              <Card className='gutter-box' >test</Card>
            </Col>


            <Col flex className="gutter-row" {...gridSpan}>
              <Card className='gutter-box' >test</Card>
            </Col>
          </Row>
        </Card>

        <Card
        title='User Activities'
        bordered={false}
        // bodyStyle={{paddingTop: '6px'}}
        >
          <div ref={this.VisitsChartRef} style={{height: '300px', flex: 'auto', width: '100%'}}></div>
        </Card>

      </>
    )
  }
}
