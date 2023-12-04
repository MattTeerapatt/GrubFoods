import classes from './MealsSummary.module.css';


const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delivery to you</h2>
      <p>Choose your meal</p>
        <p>
            All food are cooked by experienced chefs (Matt Ramsy)
        </p>    
    </section>
  );
};

export default MealsSummary;
