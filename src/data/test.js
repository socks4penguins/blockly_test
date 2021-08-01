function myFunction({ state, setState }) {
  if (!state.fields)
    setState({
      fields: [
        { field: '', type: 'string', headerName: '', addLabel: '', width: 0 },
        { field: '', type: 'string', headerName: '', addLabel: '', width: 0 },
      ],
      reduxPath: '',
      path: '',
    });
  return [
    {
      name: '',
      title: '',
      primary: true,
      children: [
        {
          component: (
            <UrbFloatingButton onClick={item => setState({ activeMenu: 'add todo' })}>
              <UrbList
                listen
                {...state}
                onRowClick={item => {
                  setState({ activeMenu: 'edit todo' });
                }}
              ></UrbList>{' '}
            </UrbFloatingButton>
          ),
        },
      ],
    },
    { name: '', title: '', primary: true, children: [{ component: <UrbAdd {...state} /> }] },
    { name: '', title: '', primary: true, children: [{ component: <UrbSet {...state}></UrbSet> }] },
  ];
}
