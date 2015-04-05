Today we’ll be looking at at the ways that Angular helps us do form validations. We’ll be talking more on forms using Angular (just like our other article: Submitting AJAX Forms: The AngularJS Way). Don’t worry though, that article is not required.
We’ll focus on client side validation and using the built in Angular form properties. Here’s a quick demo.

#Angular Form Properties $valid#
 $invalid, $pristine, $dirty
Angular provides properties on forms that help us validate them. They give us various information about a form or its inputs and are applied to a form and inputs.

#Property	Class	Description#
$valid	ng-valid :- 	Boolean Tells whether an item is currently valid based on the rules you placed.
$invalid	ng-invalid :- 	Boolean Tells whether an item is currently invalid based on the rules you placed.
$pristine	ng-pristine	:- Boolean True if the form/input has not been used yet.
$dirty	ng-dirty :- 	Boolean True if the form/input has been used.