
<tr>
        <th>
            <button ng-click="order('name')">Title</button>
            <span class="sortorder" ng-show="predicate === 'name'" ng-class="{reverse:reverse}"></span>
        </th>
        <th>
         <button ng-click="order('phone')">Description</button>
         <span class="sortorder" ng-show="predicate === 'phone'" ng-class="{reverse:reverse}"></span>
     </th>
     <th>
         <button ng-click="order('age')">Due Date</button>
         <span class="sortorder" ng-show="predicate === 'age'" ng-class="{reverse:reverse}"></span>
     </th>
 </tr>


 <div class = "row">
          <div class = "col-md-4 "></div>
          <div class = "col-md-6  m-t-3">
          <div class="todo-wrapper m-b-3" ng-controller="TodoCtrl">
              <h2>Here's your list of things to do!</h2></div>
              <ul>
                <li ng-repeat="todo in todos">
                  <input type="checkbox" ng-model="todo.done"/>
                  <span class="done-{{todo.done}}">{{todo.text}}</span></div>
                </li>
              </ul>
            <form>
              <input class="add-input" placeholder="Add item to list" type="text" ng-model="formTodoText" ng-model-instant />
              <button class="add-btn" ng-click="addTodo()"><h2>Add</h2></button>
            </form>
      
          <button class="clear-btn" ng-click="clearCompleted()">Clear completed</button>

          </div>
        </div>





        
  <img src="https://i.ytimg.com/vi/CK47s8JwMuI/maxresdefault.jpg"
  style="width:150%;height:150%;">

  <div class="card-img-overlay">
      <div class = "container">
        <div class="card-block" >
        <div class = "row">
                <div class = "col-md-4 ">
                </div>
                <div class = "col-md-6  m-t-3">
                  <div class="todo-wrapper m-b-3" ng-controller="TodoCtrl">
                      <h2>Here's your list of things to do!</h2>
                    </div>
                    
                    <ul>
                      <li ng-repeat="todo in todos">
                        <input type="checkbox" ng-model="todo.done"/>
                        <span class="done-{{todo.done}}">{{todo.text}}</span>
                 
                      </li>
                    </ul>
                  </div>
              </div>  
            </div>

              <div class = "row">
                <div class = "col-md-4 ">
                </div>
                <div class = "col-md-6  m-t-3">
                  <form>
                      <input class="add-input" placeholder="Add item to list" type="text" ng-model="formTodoText" ng-model-instant />
                      <button class="add-btn" ng-click="addTodo()"><h2>Add</h2></button>
                  </form>
      
                 <button class="clear-btn" ng-click="clearCompleted()">Clear completed</button>
              </div>
            </div>  


              
      
    </div> 
  </div>  