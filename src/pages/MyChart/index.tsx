import React, {useEffect, useState} from 'react';
import {listMyChartByPageUsingPOST} from "@/services/da/chartController";
import {Avatar, message} from "antd";
import {List} from 'antd/lib';
import ReactEcharts from "echarts-for-react";
import {useModel} from "@umijs/max";

/**
 * 我的图表
 * @constructor
 */
const MyChart: React.FC = () => {

  const initSearchParams = {
    pageSize: 12,
  }

  const [searchParams, setSearchParams] = useState<API.ChartQueryRequest>({...initSearchParams});
  const [chartList, setChartList] = useState<API.Chart[]>();
  const [total, setTotal] = useState<number>(0);
  const {initialState, setInitialState} = useModel('@@initialState');
  const {currentUser} = initialState ?? {};

  const loadData = async () => {
    try {
      const res = await listMyChartByPageUsingPOST(searchParams);
      if (res.data) {
        setChartList(res.data.records ?? []);
        setTotal(res.data.total ?? 0);
      } else {
        message.error('获取我的图标失败');
      }
    } catch (e: any) {
      message.error('获取我的图标失败，' + e.message);
    }
  }

  useEffect(() => {
    loadData();
  }, [searchParams]);

  return (
    <div className={"my-chart"}>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={chartList}
        renderItem={(item) => (
          <List.Item
            key={item.id}
          >
            <List.Item.Meta
              avatar={<Avatar src={currentUser?.userAvatar}/>}
              title={item.name}
              description={item.chartType ? ('图表类型：' + item.chartType) : undefined}

            />
            {'分析目标：' + item.goal}
            <ReactEcharts option={item.genChart && JSON.parse(item.genChart ?? '{}')}/>
          </List.Item>
        )}
      />
    </div>
  );
};
export default MyChart;
