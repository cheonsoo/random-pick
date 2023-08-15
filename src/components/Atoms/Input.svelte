<div class="columns margins">
  <div>
    <Textfield variant="outlined" bind:value={value} />

    <pre class="status">Value: {value}</pre>
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import { type TInputValue } from '@/types';
  let value: TInputValue = '';
</script>