import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './welcome.html?style=./welcome.scss';
import {
  MyComp,
  classcomp_example,
  vuecomp_example
} from '@/app/components';

@WithRender
@Component({
  components: {
    myComp: MyComp,
    vuecompExample: vuecomp_example,
    classcompExample: classcomp_example
  }
})
export default class Welcome extends Vue {

}
