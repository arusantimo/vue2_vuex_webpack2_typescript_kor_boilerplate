import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './pageWrapper.html';

require('./pageWrapper.scss');

@WithRender
@Component({
  components: {
  }
})
export default class PageWrapper extends Vue {
}
