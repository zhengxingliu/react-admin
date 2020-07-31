import React, { Component, createRef } from 'react'
import { Card, Row, Col, Progress, Statistic, Divider, Typography, Spin, Result } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined, FrownOutlined  } from '@ant-design/icons'
import echarts from 'echarts'
import moment from 'moment'

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
      isLoading: false,
      hasError: false,
      time: moment()
    }
  }
  
  getVisitsGraphData = () => {
    if (!this.updater.isMounted(this)) return 
    this.setState({isLoading: true})
    getSiteVisitStatistics()
      .then(res => {
      
        const months = res.data.amount.map(item => item.month)
        const visits = res.data.amount.map(item => item.visits)
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
              type: 'line',
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
        if (!this.updater.isMounted(this)) return 
        this.setState({hasError: true})
      })
      .finally(() => {
        if (!this.updater.isMounted(this)) return 
        this.setState({isLoading: false})
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
  
  updateClock = (e) => {
    setInterval(function(){ this.setState({time: moment()}) }.bind(this), 1000)
  }
  
  componentDidMount() {
    this.initSiteVisitsChart()
    this.getVisitsGraphData()
    this.updateClock()
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
              <Card hoverable className='gutter-box' bodyStyle={{padding: '13px'}}>
                    <Statistic 
                      title="Active"
                      value={11.28}
                      precision={2}
                      valueStyle={{ color: '#3f8600'}}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                    <Divider />
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


            <Col  className="gutter-row" {...gridSpan} >
              <Card hoverable className='gutter-box' bodyStyle={{paddingTop: '14px'}}>
                <Statistic title="Total Article" value={671135} />
                <Divider />
                <Statistic title="Total Users" value={112893} style={{marginTop: '-4px'}}/>
              </Card>
            </Col>

            <Col className="gutter-row" {...gridSpan}>
              <Card hoverable className='gutter-box' bodyStyle={{paddingTop: '45px'}}>
                <h3>{this.state.time.format('dddd')}</h3>
                <h2>{this.state.time.format('MMMM Do')}</h2>
                <Typography>{this.state.time.format('h:mm:ss a')}</Typography>
                {/* <Typography.Title level={3} style={{color: '#1a90ff'}}>{this.state.time.format('dddd, MMMM Do')}</Typography.Title>
                <Typography.Title level={4}>{this.state.time.format('h:mm:ss a')}</Typography.Title> */}
              </Card>
            </Col>

          </Row>
        </Card>

        <Card
        title='User Activities'
        bordered={false}
        // bodyStyle={{paddingTop: '6px'}}
        >
          <Spin spinning={this.state.isLoading}>
          {
          this.state.hasError ? <Result icon={<FrownOutlined />} title={'Failed to retrive data'} />
          : <div ref={this.VisitsChartRef} style={{height: '300px', flex: 'auto', width: '100%'}}></div>
          }
          </Spin>
        </Card>

      </>
    )
  }
}
