/*
* Tencent is pleased to support the open source community by making
* 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
*
* Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
*
* 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
*
* License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
*
* ---------------------------------------------------
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
* documentation files (the "Software"), to deal in the Software without restriction, including without limitation
* the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
* to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of
* the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
* THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
* CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
* IN THE SOFTWARE.
*/

import { defineComponent } from 'vue';

import DemoBox from '../../components/demo-box';
import DemoTitle from '../../components/demo-title';
import PropsBox from '../../components/props-box';
import { IPropsTableItem } from '../../typings';

import BaseDemo from './base-demo.vue';
import DemoTsx from './demo-tsx';
import FooterSlotDemo from './footer-slot-demo.vue';
import HeaderSlotDemo from './header-slot-demo.vue';
import RangeDemo from './range-demo.vue';
import ShortcutsSlotDemo from './shortcuts-slot-demo.vue';
import TriggerSlotDemo from './trigger-slot-demo.vue';
import WithTimeDemo from './with-time-demo.vue';

const menuPropsJson: IPropsTableItem[] = [
  {
    name: 'activeKey',
    type: 'String',
    default: '',
    desc: '选中的menu的key',
    optional: [],
  },
  {
    name: 'OpenedKeys',
    type: 'Array',
    default: [],
    desc: '打开的submenu key值',
    optional: [],
  },
  {
    name: 'mode',
    type: 'String',
    default: 'vertical',
    desc: '展示方式',
    optional: ['vertical', 'horizontal'],
  },
  {
    name: 'uniqueOpen',
    type: 'Boolean',
    default: 'true',
    desc: '是否唯一展开一个submenu',
    optional: [],
  },
];

export default defineComponent({
  render() {
    return (
      <div>
        <DemoTitle name="DatePicker 日期选择器" desc="日期选择器" />
          <DemoBox
            title="基础用法"
            desc="通过 v-model 或者 value 设置初始值"
            componentName="date-picker"
            demoName="base-demo">
            <BaseDemo />
          </DemoBox>
          <DemoBox
            title="开启日期范围"
            desc="通过设置 type 属性为 daterange 来开启时间设置"
            componentName="date-picker"
            demoName="range-demo">
            <RangeDemo />
          </DemoBox>
          <DemoBox
            title="开启时间设置"
            desc="通过设置 type 属性为 datetime 来开启时间设置"
            componentName="date-picker"
            demoName="with-time-demo">
            <WithTimeDemo />
          </DemoBox>
          <DemoBox
            title="trigger slot"
            desc="可以通过 trigger slot 来增加自定义 trigger"
            componentName="date-picker"
            demoName="trigger-slot-demo">
            <TriggerSlotDemo />
          </DemoBox>
          <DemoBox
            title="header slot"
            desc="自定义 header"
            componentName="date-picker"
            demoName="header-slot-demo">
            <HeaderSlotDemo />
          </DemoBox>
          <DemoBox
            title="footer slot"
            desc="自定义 footer"
            componentName="date-picker"
            demoName="footer-slot-demo">
            <FooterSlotDemo />
          </DemoBox>
          <DemoBox
            title="shortcuts slot"
            desc="自定义 shortcuts"
            componentName="date-picker"
            demoName="shortcuts-slot-demo">
            <ShortcutsSlotDemo />
          </DemoBox>
        <DemoBox
          title="demo-tsx"
          desc="自定义插槽 tsx 写法"
          componentName="date-picker"
          suffix='.tsx'
          demoName="demo-tsx">
          <DemoTsx />
        </DemoBox>
        <PropsBox propsData={menuPropsJson}/>
      </div>
    );
  },
});
